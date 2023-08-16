import Head from 'next/head'
import React,{useEffect, useState} from 'react'
import SideBar from './components/SideBar'
import TopHeader from './components/TopHeade'
import Link from 'next/link';
import axios from 'axios';
import Router from 'next/router'
import { ChevronLeft, ChevronsLeft, ChevronsRight, ChevronRight } from 'lucide-react';
import MobileSideBar from './components/MobileSideBar';


const Learning = ()=>{
    const [sideBarAccess, setSideBarAccess] = useState({
        users: false
    });
    const [learningData, setLearningData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setPageCount] = useState(1);
    const [pageList, setPageList] = useState([1,2,3]);
    const [pageLimitList, setPageLimitList] = useState([6,9,12]);
    const [limitp, setlimitp] =useState(6);    
    const [serviceStoreData, setServiceStoreData] = useState([]);
    const [inputData, setInputData] = useState({
        serviceName : '',
        service_Status:''
    });
    const redirectDetail = (redir, toRedir)=>{
      setLoading(false);
        localStorage.removeItem("resourceId");
        if(!localStorage.resourceId){
            localStorage.setItem("resourceId", redir);
            if(toRedir == 'detail'){
              Router.push('/resource-detail');
            }else if(toRedir == 'edit'){
              Router.push('/resource-edit-detail');
            }
        }
        //localStorage.setItem("resourceId":redir)
    }
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
    const inputChangeData =(event)=> {
        const {name, value} = event.target;
          setInputData((valuePre)=>{
         return{
           ...valuePre,
           [name]:value
         }
        });
        
        }
    const getData = async (currentPage) => {
            let search = "";
            search = `${search}?currentPage=${currentPage}&`;
            search = search + `ser=${inputData.serviceName}&limit=${limitp}`;
        
            axios.get(`${process.env.API_BASE_URL}learning.php${search}`)
              .then(res => {
                  const data = res.data.learningData.map((item) => {
                    return {
                      id: item.id,
                      serviceName: item.serviceName,
                      title: item.title,
                      description: item.description,
                      image: item.image,
                      url:item.id,
                      create_at: item.create_at          
                    }
                }
              )
              setLearningData(data);
              if(res.data.total){
                setPageCount(res.data.total);
              }
              if(currentPage > 3){
                setPageList([currentPage-2, currentPage-1, currentPage])
              }else if(currentPage == 3){
                setPageList([currentPage-2, currentPage-1, currentPage])
              }else if(currentPage == 2){
                setPageList([ currentPage-1, currentPage])
              }else if(currentPage == 1 && res.data.total > 1){
                setPageList([currentPage, currentPage+1])
              }              
              setLoading(true);
            })
            .catch(err => {
             })
          }        
    const getServiceData = async () => {
        axios.get(`${process.env.API_BASE_URL}services.php`)
          .then(res => {
              const data = res.data.serviceData.map((item) => {
                return {
                  id: item.id,
                  name: item.service_name,
                  status: item.status
                }
            }
          )
          setServiceStoreData(data);
        })
        .catch(err => {
         })
      }
    useEffect(() => {
        if(localStorage && localStorage.length > 0 && localStorage.type && localStorage.type=="admin"){
            setSideBarAccess({
                users : true
            })
        }
        //console.log('vv', process.env.customKey)
        getServiceData();
        getData(currentPage);
        }, [currentPage]);
    return(
        <>
        <Head>
            <meta charSet="utf-8" />
            <link href="#" rel="shortcut icon" />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="description" content=""/>
            <meta name="keywords" content=""/>
            <meta name="author" content=""/>
            <title>Learning Resources</title>
            <link rel="dns-prefetch" href="//developers.google.com" />
            <link rel="dns-prefetch" href="//maps.googleapis.com" />
            <script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.2.2/Chart.min.js'></script>
            <script src="https://reseller.ezrankings.in//dashboard/js/markerclusterer.js"></script>
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCcUcow5QHjitBVOfkTdy44l7jnaoFzW1k&amp;libraries=places"></script>
            <script src="https://reseller.ezrankings.in//dashboard/js/app.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TweenMax.min.js"></script>
        </Head>
        <MobileSideBar />
        <div className="flex mt-[4.7rem] md:mt-0">
        <SideBar />
              <div className="content">
            <TopHeader />
            <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
                    <h2 className="text-lg font-medium mr-20">
                        Resources
                    </h2>
                      {loading &&          
                     <div className="w-full sm:w-auto relative mr-auto mt-3 sm:mt-0 flex gap-20">
                            <div className="fil-box">
                            <select className="form-select" onChange={inputChangeData} name="serviceName">
                                <option value="" select="selected">Select</option>
                                    {serviceStoreData && serviceStoreData.length > 0 && serviceStoreData.map((service, s)=>{
                                        return(
                                            <>
                                            <option value ={service.id} key={s}>{service.name}</option>
                                            </>
                                        )
                                    })}
                            </select>
                                </div>

                            <button className="btn btn-primary w-32 ml-2" onClick={()=>{
                                getData(currentPage)
                            }}>Search</button>
                     </div>}
                            {sideBarAccess.users &&
                    <div className="w-full sm:w-auto flex mt-4 sm:mt-0">
                        <Link href="/add-resource" className="btn btn-primary shadow-md mr-2">Add New</Link>
                    </div>}
            </div>            
            {  loading &&  
            <div className="intro-y grid grid-cols-12 gap-6 mt-5">
              {learningData && learningData.length > 0 && learningData.map((learn, l)=>{
                  return(
                      <>
                      <div className="intro-y col-span-12 md:col-span-6 xl:col-span-4 box learning-res" key={l}>
                          <div className="2xl:h-56 image-fit">
                                  <img alt="" src={learn.image} />
                              </div>
                          <div className="learning-box" >
                              
                              <a href="#"  className="block font-medium text-base">{learn.title}</a> 
                                  <div className="flex text-slate-500 truncate text-xs mt-0.5"> <a className="text-primary inline-block truncate" href="#">{learn.serviceName} </a> <span className="mx-1">•</span> {learn.create_at} ago </div>
                              <div className="text-slate-600 dark:text-slate-500 mt-2">{learn.description.substr(0, 100)}</div>
                          <hr />
                      <div className="d-flex">
                          <a href="#" onClick={()=>{
                              redirectDetail(learn.id, 'detail')
                          }}>Read More</a>
                        { sideBarAccess.users &&
                        <a href="#" onClick={()=>{
                        redirectDetail(learn.id,'edit')
                    }}>Edit</a>}
                      </div>
                          </div>
                      </div>                            
                      </>
                  )
              })}
            </div>
            }
          {loading && totalPages && totalPages > 1 && 
            <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
                      <nav className="w-full sm:w-auto sm:mr-auto">
                          <ul className="pagination">
                              <li className="page-item" onClick={()=>{
                                getPageData(1)
                              }}>
                                  <a className="page-link" href="#"> <ChevronsLeft  className="w-4 h-4" /></a>
                              </li>
                              <li className="page-item" onClick={getPreviousPageData}>
                                  <a className="page-link" href="#"> <ChevronLeft  className="w-4 h-4" /></a>
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
                                  <a className="page-link" href="#"> <ChevronRight  className="w-4 h-4" /> </a>
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
          {!loading &&
          <div>
            <h1 style={{textAlign:"center",fontSize:"35px",padding:"8rem"}}>Loading....</h1>   
          </div>
          } 

              </div>
          
          
        </div>
        </>
    )
}
export default Learning