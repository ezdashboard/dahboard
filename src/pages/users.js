import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import { ChevronLeft, ChevronsLeft, ChevronsRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import SideBar from './components/SideBar';
import TopHeader from './components/TopHeade';
import NewsLetter from './components/NewsLetter';
import axios from 'axios';
import { CheckSquare, Trash2, XCircle } from 'lucide-react';
import Router from 'next/router'
import MobileSideBar from './components/MobileSideBar';


 const UserList = ()=> {
  const [selectedFile, setSelectedFile] = useState(null);
  const [styyyyy,setStyleCss] = useState('');
  const [loading, setLoading] = useState(false);
  const [delteId, setDeleteId] = useState(0);
  const [totalPages, setPageCount] = useState(1);
  const [limitp, setlimitp] =useState(5);
  const [pageList, setPageList] = useState([1,2,3]);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const [modalCss, setModalCss] = useState('modal');
  const setModalCssFun =(id)=>{
    setModalCss('modal show overflow-y-auto modal-overlap deleteModal');
    setDeleteId(id);
    setStyleCss('');
  }
  const setModalCssCloseFun =()=>{
    setStyleCss('none');
    setModalCss('');
    setDeleteId();
  }
  const redirectDetail = (redir, toRedir)=>{
    setLoading(false);
      localStorage.removeItem("UserUpId");
      if(!localStorage.UserUpId){
          localStorage.setItem("UserUpId", redir);
          if(toRedir == 'cccdetail'){
            Router.push('/resource-detail');
          }else if(toRedir == 'edit'){
            Router.push('/user-edit');
          }
      }
      //localStorage.setItem("resourceId":redir)
  }
  const [bodyCsss, setBodyCss] = useState('py-5');
  const [inputData, setInputData] = useState({
      companyname : '',
      title : '',
      name : '',
      email : '',
      contactno : '',
      about : '',
      location : '',
      userid :''
  })
  const [profileData, setProfileData] = useState({
     
      companyname : '',
      title : '',
      name : '',
      email : '',
      contactno : '',
      about : '',
      location : '',
      image : '',
      logo : '',
      userid : ''
  });


  const getNextPageData =()=>{
    if(totalPages > currentPage){
      setCurrentPage(currentPage+1);
    }
  }
  const getPageData =(pageno)=>{
    if(currentPage != pageno){
      setCurrentPage(pageno);
    }
  }
  const getPreviousPageData =()=>{
    if(currentPage > 1){
      setCurrentPage(currentPage-1);
    }
  } 
  const [closeIcon, setCloseIcon] = useState(false)
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [userStoreData, setUserStoreData] = useState([]);
  const userDeleted = async (userId) => {
    setModalCssCloseFun();

    axios.get(`${process.env.API_BASE_URL}userDelete.php?userid=${userId}`)
    .then(res => {
        if(res && res.data && res.data.status){
          const updatedUserStoreData = userStoreData.filter((user) => user.id !== userId);
          setUserStoreData(updatedUserStoreData);
          alert('Deleted successfully.');
        }
  })
  .catch(err => {
   })
  };
  const fetchData = async (page) => {
    axios.get(`${process.env.API_BASE_URL}users.php?page=${page}&limit=${limitp}&user=${localStorage.userid}`)
      .then(res => {
          const data = res.data.userData.map((item) => {
            return {
              id: item.userid,
              name: item.name,
              email: item.email,
              contactno: item.contactno,
              companyname: item.companyname,
              title: item.title,
              logo: item.logo,
              type: item.type,
              status: item.status == '1' ? 'Active' : 'Inactive',
              image: item.image
            }
        }
      )
      setUserStoreData(data);
      if(res.data.total){
        setPageCount(res.data.total);
        if(page > 3){
          setPageList([page-3, page-2, page-1])
        }else if(page == 1){
          if(res.data.total > 2){
            setPageList(["1","2","3"]);
          }else if(res.data.total == 2){
            setPageList(["1","2"])
          }else if(res.data.total ==1){
            setPageList(["1"])
          }
        }
      }
      setLoading(true);
    })
    .catch(err => {
     })
 }
  useEffect(() => {
      if(localStorage.title && localStorage.email && localStorage.logo && localStorage.companyname && localStorage.userid && localStorage.name){
          setProfileData({
              companyname : localStorage.companyname,
              title : localStorage.title,
              name : localStorage.name,
              email : localStorage.email,
              contactno : localStorage.contactno ? localStorage.contactno : '',
              about : localStorage.about ? localStorage.about : '',
              location : localStorage.location ? localStorage.location : '',
              image : localStorage.image ? localStorage.image : '',
              logo : localStorage.logo,
              userid : localStorage.userid
          });
      }
      fetchData(currentPage);

      }, [currentPage]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link href="#" rel="shortcut icon"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content=""/>
        <meta name="keywords" content=""/>
        <meta name="author" content=""/>
        <title>Reseller User List</title>
        <link rel="dns-prefetch" href="//developers.google.com"/>
        <link rel="dns-prefetch" href="//maps.googleapis.com"/>
        <script src="https://reseller.ezrankings.in/dashboard/js/markerclusterer.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCcUcow5QHjitBVOfkTdy44l7jnaoFzW1k&amp;libraries=places"></script>
        {loading && <script src="https://reseller.ezrankings.in/dashboard/js/app.js"></script>}
      </Head>
      <MobileSideBar />
      <div className="flex mt-[4.7rem] md:mt-0">
        <SideBar logo={profileData.logo}/>
        <div className="content">
            <TopHeader title={profileData.companyname} img={profileData.image}/>
            <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
                <h2 className="text-lg font-medium mr-auto">
                    Users
                </h2>
                <div className="w-full sm:w-auto flex mt-4 sm:mt-0">
                    <Link href="/addUser"><button className="btn btn-primary shadow-md mr-2">Add New User</button></Link>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6 mt-5">
                <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
                    <table className="table table-report -mt-2">
                        <thead>
                            <tr>
                                <th className="whitespace-nowrap">NAME</th>
                                <th className="whitespace-nowrap">EMAILID</th>
                                <th className="text-center whitespace-nowrap">USER ROLE</th>
                                <th className="text-center whitespace-nowrap">STATUS</th>
                                <th className="text-center whitespace-nowrap">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                          {userStoreData && userStoreData.map((users, u)=>(
                            <tr className="intro-x" key={u}>
                              <td className="w-40">
                                  <div className="flex">
                                      <div className="w-10 h-10 image-fit zoom-in">
                                          <Link href="#" className="font-medium whitespace-nowrap">{users.name}</Link> 
                                          <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">{users.title}</div>
                                      </div>
                                  </div>
                              </td>
                              <td>
                                  <Link href="#" className="font-medium whitespace-nowrap">{users.email}</Link> 
                              </td>
                              <td className="text-center">{users.type}</td>
                              <td className="w-40">
                                  <div className="flex items-center justify-center text-success"> <CheckSquare className="w-4 h-4 mr-2"/> {users.status} </div>
                              </td>
                              <td className="table-report__action w-56">
                                  <div className="flex justify-center items-center">
                                      {/* <a className="flex items-center mr-3" href="javascript:;"> <i data-lucide="check-square" className="w-4 h-4 mr-1"></i> Edit </a> */}
                                      <Link className="flex items-center mr-3" href="#" onClick={()=>{
                                    redirectDetail(users.id, 'edit')
                                }} ><CheckSquare className="w-4 h-4 mr-1"/> Edit </Link>
                                      <a className="flex items-center text-danger" onClick={()=>{
                                        setModalCssFun(users.id)
                                      }} > <i data-lucide="trash-2" className="w-4 h-4 mr-1"></i> Delete </a>
                                  </div>
                              </td>                                    
                            </tr>
                          ))}
                        </tbody>
                    </table>
                </div>

            { loading && totalPages && totalPages > 1 &&
                <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
                  <nav className="w-full sm:w-auto sm:mr-auto">
                      <ul className="pagination">
                          <li className="page-item" onClick={()=>{
                            getPageData(1)
                          }}>
                              <a className="page-link" href="#"> <ChevronsLeft  className="w-4 h-4" /> </a>
                          </li>
                          <li className="page-item" onClick={getPreviousPageData}>
                              <a className="page-link" href="#"> <ChevronLeft  className="w-4 h-4" /> </a>
                          </li>
                          <li className="page-item"> <a className="page-link" href="#">...</a> </li>

                            {pageList.map((data, i)=>{

                            return(
                              <li key={i} onClick={()=>{
                            setCurrentPage(data)}} className={currentPage == data ? 'page-item active' : 'page-item'}><a href="#" className={currentPage == data ? 'page-link' : 'page-link'}>{data}</a></li>
                                        )
                                    })}
                          <li className="page-item"> <a className="page-link" href="#">...</a> </li>
                          <li className="page-item" onClick={getNextPageData }>
                              <a className="page-link" href="#"> <ChevronRight  className="w-4 h-4" /></a>
                          </li>
                          <li className="page-item" onClick={()=>{
                            setCurrentPage(totalPages)}}>
                              <a className="page-link" href="#"><ChevronsRight  className="w-4 h-4" /> </a>
                          </li>
                      </ul>
                  </nav>
                  {/* <select className="w-20 form-select box mt-3 sm:mt-0">
                    {pageLimitList && pageLimitList.length > 0 && pageLimitList.map((limitp, lp)=>{
                      return(
                        <>
                        <option key={lp} value={limitp}>{limitp}</option>
                        </>
                      )
                    })}

                  </select> */}
                </div>
            } 

                            
            { !loading &&
            <div>
              <h1 style={{textAlign:"center",fontSize:"35px",padding:"8rem",marginLeft:"15rem"}}>Loading....</h1>   
            </div>
            }
            </div>
        </div>
        <div id="delete-confirmation-modal" style={{display:styyyyy}}className={modalCss} tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body p-0">
                        <div className="p-5 text-center">
                            <i data-lucide="x-circle" className="w-16 h-16 text-danger mx-auto mt-3"></i> 
                            <div className="text-3xl mt-5">Are you sure?</div>
                            <div className="text-slate-500 mt-2">
                                Do you really want to delete these records? 
                                <br />
                                This process cannot be undone.
                            </div>
                        </div>
                        <div className="px-5 pb-8 text-center">
                            <button type="button" onClick={setModalCssCloseFun} className="btn btn-outline-secondary w-24 mr-1">Cancel</button>
                            <a href="#" onClick={()=>userDeleted(delteId)} className="btn btn-danger w-24">Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
      </div>
    </>
  )
}


export default UserList;