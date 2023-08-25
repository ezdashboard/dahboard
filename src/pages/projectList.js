import React, {useState, useEffect} from 'react'
import Head from 'next/head'
// import routes from './routes';
import Link from 'next/link';
import SideBar from './components/SideBar';
import TopHeader from './components/TopHeade';
import NewsLetter from './components/NewsLetter';
import axios from 'axios';
import { CheckSquare, Trash2, XCircle } from 'lucide-react';
import { Search  } from 'lucide-react';
import Router from 'next/router'
import { ChevronLeft, ChevronsLeft, ChevronsRight, ChevronRight } from 'lucide-react';
import MobileSideBar from './components/MobileSideBar';

 const ProjectList = ()=> {

  const [loading, setLoading] = useState(false);
  const [dasbboardType, setDashboardType] = useState('');
  const [reportData, setReportData] = useState([]);
  const [serviceStoreData, setServiceStoreData] = useState([]);
  const [totalPages, setPageCount] = useState(1);
  const [pageList, setPageList] = useState([1]);
  const [pageLimitList, setPageLimitList] = useState([5,10,15]);
  const [limitp, setlimitp] =useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const redirectDetail = (redir, toRedir)=>{
    setLoading(false);
      localStorage.removeItem("projectId");
      if(!localStorage.projectId){
          localStorage.setItem("projectId", redir);
          if(toRedir == 'cccdetail'){
            Router.push('/resource-detail');
          }else if(toRedir == 'edit'){
            Router.push('/project-edit-detail');
          }
      }
      //localStorage.setItem("resourceId":redir)
  }
  const [inputData, setInputData] = useState({
    serviceName : '',
    service_Status:''
});

  const [addBtn, setAddBtn] = useState(false);
  const navigation = ()=>{
    Router.push("/add-report")
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
const searchFilterData = () =>{
  getReportData(currentPage);
}
 const getReportData = async (currentPage) => {
    let search = "";
    search = `${search}?currentPage=${currentPage}&`;
    if(localStorage.userid && localStorage.userid > 1){
      search = search+ "user="+localStorage.userid + "&";
    }
    search = search + `ser=${inputData.serviceName}&status=${inputData.service_Status}&limit=${limitp}`;

  axios.get(`${process.env.API_BASE_URL}reports.php${search}`)
    .then(res => {
        const data = res.data.reportsData.map((item) => {
          return {
            id: item.id,
            serviceName: item.serviceName,
            dwlUrl: item.dwlUrl,
            projectUrl: item.projectUrl,
            planOpted: item.planOpted,
            billingAmt: item.billingAmt,
            username: item.username ? item.username : 'User Deleted',
            managerName : item.managerName ? item.managerName : 'Manager Deleted',
            startDate: item.startDate,
            reportingDate: item.reportingDate,
            paymentStatus: item.paymentStatus,
            projectStatus: item.projectStatus,
            userAssign: item.userAssign,            
          }
      }
    )
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
    setReportData(data);
    setLoading(true);
  })
  .catch(err => {
   })
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
    if(!localStorage.userid){
        Router.push('/login');
    }else{
    if(localStorage && localStorage.length > 0 && localStorage.type && localStorage.type !="user"){
      setAddBtn(true);
      setDashboardType(localStorage.type);

    }

    }
    getReportData(currentPage);
    getServiceData();

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
        <title>Reseller Projects && Reports</title>
        <link rel="dns-prefetch" href="//developers.google.com"/>
        <link rel="dns-prefetch" href="//maps.googleapis.com"/>
        <script src="https://reseller.ezrankings.in//dashboard/js/markerclusterer.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCcUcow5QHjitBVOfkTdy44l7jnaoFzW1k&amp;libraries=places"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TweenMax.min.js"></script>
        <script src="https://reseller.ezrankings.in//dashboard/js/app.js"></script>
        <script src="https://reseller.ezrankings.in//dashboard/js/map.js"></script>
      </Head>
      <MobileSideBar />
      <div className="flex mt-[4.7rem] md:mt-0">
        <SideBar/>
         <div className="content">
          <TopHeader />
              <div className="col-span-12 mt-6">
          { loading &&  
             <div className="col-span-12 mt-8">
                  <div className="col-span-12 mt-8">
                    <div className="intro-y flex items-center h-10">
                        <h2 className="text-lg font-medium truncate mr-5">General Report</h2>
                        <div className="w-full sm:w-auto relative mr-auto mt-3 sm:mt-0 flex gap-20">
                            <div className="fil-box">
                            <select className="form-select" onChange={inputChangeData} name="serviceName">
                                <option value="" select="selected">Service</option>
                                    {serviceStoreData && serviceStoreData.length > 0 && serviceStoreData.map((service, s)=>{
                                        return(
                                            <>
                                            <option value ={service.id} key={s}>{service.name}</option>
                                            </>
                                        )
                                    })}
                            </select>
                            </div>
                            <div className="fil-box">
                                <select id="input-wizard-6" className="form-select" name="service_Status" onChange={inputChangeData}>
                                  <option value="">Project Status</option>
                                  <option value="Active">Active</option>
                                  <option value="Paused">Pause</option>
                                </select>
                            </div>
                            <button type="button" onClick={searchFilterData}className="btn btn-primary w-32 ml-2">Search</button>
                        </div>
                        {addBtn && 
                         <button className="btn btn-primary new-repot" onClick={navigation}>Add New</button>}
                    </div>
                  </div>
                </div>}
                
            { loading &&  
             <div className="intro-y overflow-scroll table-scroll lg:overflow-visible mt-8 sm:mt-0" bis_skin_checked="1">
                    <table className="table table-report sm:mt-2">
                        <thead>
                            <tr className="project-heading">
                                <th className="whitespace-nowrap">Services</th>
                                <th className="whitespace-nowrap">Project URL / Status</th>
                               {addBtn && <th className="whitespace-nowrap">User / Manager</th>}
                                <th className="text-center whitespace-nowrap">Plan Opted</th>
                                <th className="text-center whitespace-nowrap">Billing Amount</th>
                                <th className="text-center whitespace-nowrap">Start Date</th>
                                <th className="text-center whitespace-nowrap">Reporting Date</th>
                                <th className="text-center whitespace-nowrap">Payment Status</th>
                                {addBtn &&  <th className="text-center whitespace-nowrap">Edit</th>
                                }<th className="text-center whitespace-nowrap">View</th>

                            </tr>
                        </thead>
                        <tbody>
               {reportData && reportData.length > 0 && reportData.map((report, r)=>{
                return(
                  <>
                          <tr className="intro-x" key={r}>
                            <td>
                              <a href="#" className="font-medium whitespace-nowrap">{report.serviceName}</a>
                            </td>
                            <td>
                                <a href={report.projectUrl} target="_blank" className="font-medium whitespace-nowrap">{report.projectUrl}</a>
                                <div className= {report.projectStatus=='Active' ? 'text-slate-500 text-xs whitespace-nowrap mt-0.5 text-success' : 'text-slate-500 text-xs whitespace-nowrap mt-0.5 text-danger'}bis_skin_checked="1">{report.projectStatus}</div>
                            </td>
                            {addBtn &&
                            <td>
                                <a href={'#'} className="font-medium whitespace-nowrap">{report.username}</a>
                                <div className= {'font-medium whitespace-nowrap'}bis_skin_checked="1">{report.managerName}</div>
                            </td>   
                            }                         
                            <td className="text-center">{report.planOpted}</td>
                            <td className="w-40">
                                <div className="flex items-center justify-center" bis_skin_checked="1">
                                    ${report.billingAmt}
                                </div>
                            </td>
                            <td className="w-40">
                                <div className="flex items-center justify-center" bis_skin_checked="1">
                                  {report.startDate}
                                </div>
                            </td>
                            <td className="w-40">
                                <div className="flex items-center justify-center" bis_skin_checked="1">
                                    {report.reportingDate}
                                </div>
                            </td>
                            <td className="text-center">
                              <a href="#" className={report.paymentStatus=='Paid' ? 'pay-done': 'pay-due'}>{report.paymentStatus}</a>
                            </td>
                            {addBtn && <td>
                              <a href="#" onClick={()=>{
                                    redirectDetail(report.id, 'edit')
                                }} className="pay-done">Edit</a>
                            </td>                             
                            }<td>
                              <a target="_blank" href={report.dwlUrl ? report.dwlUrl.substring(0, 4) == 'http' ? report.dwlUrl : 'https://'+report.dwlUrl : ''} className="font-medium whitespace-nowrap report">Download Report</a>
                            </td>
                          </tr>                  
                  </>
                )
               })}           


                        </tbody>
                    </table>
                </div>}
              </div> 
            {loading && totalPages && totalPages > 1 &&
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
             </div> 
            } 
              {!loading &&
              <div>
                <h1 style={{textAlign:"center",fontSize:"35px",padding:"8rem"}}>Loading....</h1>   
              </div>}  

          {loading && <NewsLetter userType={dasbboardType}/>}
         </div>
      </div>
    </>
  )
}


export default ProjectList;