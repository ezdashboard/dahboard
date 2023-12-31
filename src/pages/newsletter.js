import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link';
import SideBar from './components/SideBar';
import TopHeader from './components/TopHeade';
import NewsLetter from './components/NewsLetter';
import axios from 'axios';
import { CheckSquare, Trash2, XCircle } from 'lucide-react';


 const NewsletterList = ()=> {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

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

  const [hiddenTitleIndex, setHiddenTitleIndex] = useState(0);
  
  const toggleHiddenTitle = (index) => {
    if (hiddenTitleIndex === index) {
      setHiddenTitleIndex(null);
    } else {
      setHiddenTitleIndex(index);
    }
  };
  const [closeIcon, setCloseIcon] = useState(false)
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [userStoreData, setUserStoreData] = useState([]);

  const userDeleted =(index)=>{
    const updatedList = [...userStoreData];
    updatedList.splice(index, 1);
    setUserStoreData(updatedList);
  }
  const fetchData = async (page) => {

    axios.get(`https://reseller.ezrankings.in//dashboard/news.php?page=${page}`)
      .then(res => {
          const data = res.data.userData.map((item) => {
            return {
              id: item.id,
              description: item.description,
              title: item.title,
              status: item.status == '1' ? 'Active' : 'Inactive'
            }
        }
      )
      setUserStoreData(data);
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
  const [msg, setFormStatus] = useState('')

  const [submitBtn, setSubmitBtn] = useState({})
  const inputChangeData =(event)=> {
  
    const {name, value} = event.target;
    setInputData((valuePre)=>{
   return{
     ...valuePre,
     [name]:value
   }
  });
  
  }
  const submitCloseIcon = ()=>{
    setCloseIcon(false);
  }
  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitBtn({
      padding: '1rem 0rem',
      display: 'block',
      color: 'red'
    })
    if(inputData && inputData.email){
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsValidEmail(emailRegex.test(inputData.email));
  
    }
    if(!inputData.name){
      setFormStatus("Name can not be blank.")
      setCloseIcon(true);
    // }else if(!inputData.email){
    //   setFormStatus("Email can not be blank.")
    //   setCloseIcon(true);   
    }else if(!inputData.email){
      setFormStatus("Email can not be blank.")
      setCloseIcon(true);  
    }else if(!inputData.companyname){
      setFormStatus("Company Name can not be blank.")
      setCloseIcon(true);  
    }else if(!inputData.contactno){
      setFormStatus("Phone Number can not be blank.")
      setCloseIcon(true);  
    }else if(!inputData.password){
      setFormStatus("Password can not be blank.")
      setCloseIcon(true);                                  
    }else{
      inputData.userid = profileData && profileData.userid ? profileData.userid : '';
      axios.post(`https://reseller.ezrankings.in//dashboard/adduser.php`,inputData,{
        headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
        .then(res => {
            const data = res.data;
            if(res &&  res.data && res.data.error && res.data.error.length > 0){
                setFormStatus(res.data.error);
                setCloseIcon(true);
            }else if(res &&  res.data && res.data.msg && res.data.msg.length > 0){
                    //Router.push('/thankyou')
                    setFormStatus("User added successfully.");
                    //localStorage.clear();
                    setInputData({
                      companyname : '',
                      name : '',
                      email : '',
                      contactno : '',
                      password : ''
                  });

                    setCloseIcon(true);
                    setSubmitBtn({
                      padding: '1rem 0rem',
                      display: 'block',
                      color: '#46c737'
                    })
                  }
  
      })
      .catch(err => {
       })
    }
  }
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link href="#" rel="shortcut icon"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content=""/>
        <meta name="keywords" content=""/>
        <meta name="author" content=""/>
        <title>Reseller Dashboard</title>
        {/* <link rel="stylesheet" href="https://reseller.ezrankings.in//dashboard/css/app.css"/> */}
        <link rel="dns-prefetch" href="//developers.google.com"/>
        <link rel="dns-prefetch" href="//maps.googleapis.com"/>
        <script src="https://reseller.ezrankings.in//dashboard/js/markerclusterer.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCcUcow5QHjitBVOfkTdy44l7jnaoFzW1k&amp;libraries=places"></script>
        <script src="https://reseller.ezrankings.in//dashboard/js/app.js"></script>
        <script src="https://reseller.ezrankings.in//dashboard/js/map.js"></script>
      </Head>
      <div className="flex mt-[4.7rem] md:mt-0">
        <SideBar logo={profileData.logo}/>
              <div className="content">
                  <TopHeader title={profileData.companyname} img={profileData.image}/>
                  
                  <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
                      <h2 className="text-lg font-medium mr-auto">
                      News Letter List
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
                                      <th className="whitespace-nowrap">Title</th>
                                      <th className="whitespace-nowrap">News</th>
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
                                                {/* <Link href="#" className="font-medium whitespace-nowrap">{users.name}</Link>  */}
                                                <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">{users.title}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <Link href="#" className="font-medium whitespace-nowrap">{users.description}</Link> 
                                    </td>
                                    <td className="text-center">{users.userid}</td>
                                    <td className="w-40">
                                        <div className="flex items-center justify-center text-success"> <CheckSquare className="w-4 h-4 mr-2"/> {users.status} </div>
                                    </td>
                                    <td className="table-report__action w-56">
                                        <div className="flex justify-center items-center">
                                            <Link className="flex items-center mr-3" href="/edit-user"><CheckSquare className="w-4 h-4 mr-1"/> Edit </Link>
                                            <Link className="flex items-center text-danger" href="#" onClick={()=>userDeleted(u)}> <Trash2  className="w-4 h-4 mr-1" /> Delete </Link>
                                        </div>
                                        <div id={'delete-confirmation-modal'+u} className="modal" tabIndex="-1" aria-hidden="true">
                                          <div className="modal-dialog">
                                              <div className="modal-content">
                                                  <div className="modal-body p-0">
                                                      <div className="p-5 text-center">
                                                          <XCircle className="w-16 h-16 text-danger mx-auto mt-3" /> 
                                                          <div className="text-3xl mt-5">Are you sure?</div>
                                                          <div className="text-slate-500 mt-2">
                                                              Do you really want to delete these records? 
                                                              <br />
                                                              This process cannot be undone.
                                                          </div>
                                                      </div>
                                                      <div className="px-5 pb-8 text-center">
                                                          <button type="button" data-tw-dismiss="modal" className="btn btn-outline-secondary w-24 mr-1">Cancel</button>
                                                          <button type="button" onClick={() => userDeleted(u)} className="btn btn-danger w-24" >Delete</button>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                        </div>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
      </div>
    </>
  )
}


export default NewsletterList;