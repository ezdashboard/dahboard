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

 const ProjectList = ()=> {

  const [faqData, setFaqData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [reportData, setReportData] = useState([]);
  const [readMore, setReadMore] = useState(false);
  const [readMoreClass, setReadMoreClass] = useState('hide');
  const updateContent=()=>{
   if(!readMore){
      setReadMore(true);
   }else{
      setReadMore(false);
   }
  }

  const [hiddenTitleIndex, setHiddenTitleIndex] = useState(0);



  const toggleHiddenTitle = (index) => {
    if (hiddenTitleIndex === index) {
      setHiddenTitleIndex(null);
    } else {
      setHiddenTitleIndex(index);
    }
  };
  const [addBtn, setAddBtn] = useState(false);
  const navigation = ()=>{
    Router.push("/add-report")
  }
  const NewsList = async (page) => {

    axios.get(`https://smca.ezrankings.in/dashboard/newsList.php`)
      .then(res => {
          const data = res.data.newsData.map((item) => {
            return {
              id: item.id,
              content: item.content,
              time: item.time,
              user: item.user,
            }
        }
      )
      setNewsData(data);
    })
    .catch(err => {
     })
 }
 const getReportData = async () => {

  axios.get(`https://smca.ezrankings.in/dashboard/reports.php`)
    .then(res => {
        const data = res.data.reportsData.map((item) => {
          return {
            id: item.id,
            serviceName: item.serviceName,
            dwlUrl: item.dwlUrl,
            projectUrl: item.projectUrl,
            planOpted: item.planOpted,
            billingAmt: item.billingAmt,
            startDate: item.startDate,
            reportingDate: item.reportingDate,
            paymentStatus: item.paymentStatus,
            projectStatus: item.projectStatus,
            userAssign: item.userAssign,            
          }
      }
    )
    setReportData(data);
  })
  .catch(err => {
   })
}
  useEffect(() => {
    if(!localStorage.userid){
        Router.push('/login');
    }else{
    if(localStorage && localStorage.length > 0 && localStorage.type && localStorage.type=="admin"){
      setAddBtn(true);
      NewsList();
    }

    }
    getReportData();

    }, []);
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
        <link rel="dns-prefetch" href="//developers.google.com"/>
        <link rel="dns-prefetch" href="//maps.googleapis.com"/>
        <script src="https://smca.ezrankings.in/dashboard/js/markerclusterer.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCcUcow5QHjitBVOfkTdy44l7jnaoFzW1k&amp;libraries=places"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TweenMax.min.js"></script>
        <script src="https://smca.ezrankings.in/dashboard/js/app.js"></script>
      <script src="https://smca.ezrankings.in/dashboard/js/map.js"></script>
      </Head>
      <div className="flex mt-[4.7rem] md:mt-0">
        <SideBar/>
         <div className="content">
          <TopHeader />
              <div className="col-span-12 mt-6" bis_skin_checked="1">
                <div className="col-span-12 mt-8">
                <div className="col-span-12 mt-8">
            <div className="intro-y flex items-center h-10">
                <h2 className="text-lg font-medium truncate mr-5">General Report</h2>
                <div className="w-full sm:w-auto relative mr-auto mt-3 sm:mt-0 flex gap-20">
                    <div className="fil-box">
                        <select id="input-wizard-6" className="form-select">
                            <option>Select Services</option>
                            <option>SEO</option>
                            <option>SEO</option>
                            <option>SEO</option>
                            <option>SEO</option>
                            <option>SEO</option>
                            <option>SEO</option>
                        </select>
                    </div>
                    <div className="fil-box">
                        <select id="input-wizard-6" className="form-select">
                                <option>Status</option>
                                <option>Active</option>
                                <option>Pause</option>
                        </select>
                    </div>
                            <button className="btn btn-primary w-32 ml-2">Search</button>
                </div>
                <a href className="ml-auto flex items-center text-primary">
                    Show More
                </a>
            </div>
        </div>
                </div>
                <div className="col-md-12">
                    <div className="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap" bis_skin_checked="1">
{addBtn &&                        <button className="btn btn-primary" onClick={navigation}>Add New Report</button>}
                        <div className="hidden mx-auto md:block text-slate-500" bis_skin_checked="1">Showing 1 to 10 of 150 entries
                        </div>
                        <div className="w-full mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0" bis_skin_checked="1">
                          <div className="relative w-56 text-slate-500" bis_skin_checked="1">
                              {/* <input type="text" className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 [&amp;[readonly]]:dark:border-transparent transition duration-200 ease-in-out text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 w-56 pr-10 !box" placeholder="Search..." /> */}
                                              <div className="search hidden sm:block">
                    <input type="text" className="search__input form-control border-transparent" placeholder="Search..." />
                    <Search  className="search__icon dark:text-slate-500"/>
                </div>
                              {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="stroke-1.5 absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> */}
                          </div>
                        </div>
                    </div>
                </div>
                <div className="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0" bis_skin_checked="1">
                    <table className="table table-report sm:mt-2">
                        <thead>
                            <tr className="project-heading">
                                <th className="whitespace-nowrap">Services</th>
                                <th className="whitespace-nowrap">Project URL / Status</th>
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
                                <div className= {report.projectUrl=='Active' ? 'text-slate-500 text-xs whitespace-nowrap mt-0.5 text-success' : 'text-slate-500 text-xs whitespace-nowrap mt-0.5 text-danger'}bis_skin_checked="1">{report.projectUrl}</div>
                            </td>
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
                              <a href="#" className="pay-done">Edit</a>
                            </td>                             
                            }<td>
                              <a target="_blank" href={report.dwlUrl} className="font-medium whitespace-nowrap report">Download Report</a>
                            </td>
                          </tr>                  
                  </>
                )
               })}           


                        </tbody>
                    </table>
                </div>
              </div>       
          <NewsLetter news={newsData}/>
         </div>
      </div>

    </>
  )
}


export default ProjectList;