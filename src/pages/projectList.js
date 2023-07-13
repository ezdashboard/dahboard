import React, {useState, useEffect} from 'react'
import Head from 'next/head'
// import routes from './routes';
import Link from 'next/link';
import SideBar from './components/SideBar';
import TopHeader from './components/TopHeade';
import NewsLetter from './components/NewsLetter';

import { Search  } from 'lucide-react';

 const ProjectList = ()=> {
  const [faqData, setFaqData] = useState([]);
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
  useEffect(() => {
    if(!localStorage.userid){
        Router.push('/login');
    }else{
    if(localStorage && localStorage.length > 0 && localStorage.type && localStorage.type=="admin"){
      setAddBtn(true);
    }
    }
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
        <script src="https://smca.ezrankings.in/dashboard/js/app.js"></script>
        <script src="https://smca.ezrankings.in/dashboard/js/map.js"></script>
      </Head>
      <div className="flex mt-[4.7rem] md:mt-0">
        <SideBar/>
         <div className="content">
          <TopHeader />
              <div className="col-span-12 mt-6" bis_skin_checked="1">
                <div className="col-span-12 mt-8">
                </div>
                <div className="col-md-12">
                    <div className="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap" bis_skin_checked="1">
{addBtn &&                        <button className="transition duration-200 border inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&amp;:hover:not(:disabled)]:bg-opacity-90 [&amp;:hover:not(:disabled)]:border-opacity-90 [&amp;:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary mr-2 shadow-md">Add New Report</button>}
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
                                <th className="text-center whitespace-nowrap">View</th>
                            </tr>
                        </thead>
                        <tbody>
                          <tr className="intro-x">
                            <td>
                              <a href="" className="font-medium whitespace-nowrap">Service 1</a>
                              <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5" bis_skin_checked="1">Digital Makreting</div>
                            </td>
                            <td>
                                <a href="" className="font-medium whitespace-nowrap">www.google.com</a>
                                <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5 text-success" bis_skin_checked="1">Active</div>
                            </td>
                            <td className="text-center">50</td>
                            <td className="w-40">
                                <div className="flex items-center justify-center" bis_skin_checked="1">
                                    $50
                                </div>
                            </td>
                            <td className="w-40">
                                <div className="flex items-center justify-center" bis_skin_checked="1">
                                  23/05/2023
                                </div>
                            </td>
                            <td className="w-40">
                                <div className="flex items-center justify-center" bis_skin_checked="1">
                                    23/05/2023
                                </div>
                            </td>
                            <td className="text-center">
                              <a href="" className="pay-done">Paid</a>
                            </td>
                            <td>
                              <a href="" className="font-medium whitespace-nowrap report">Download Report</a>
                            </td>
                          </tr>
                          <tr className="intro-x">
                                  <td>
                                    <a href="" className="font-medium whitespace-nowrap">Service 1</a>
                                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5" bis_skin_checked="1">Digital Makreting</div>
                                </td>
                                <td>
                                    <a href="" className="font-medium whitespace-nowrap">www.google.com</a>
                                    <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5 text-success" bis_skin_checked="1">Active</div>
                                </td>
                                <td className="text-center">50</td>
                                <td className="w-40">
                                    <div className="flex items-center justify-center" bis_skin_checked="1">
                                        $50
                                    </div>
                                </td>
                                <td className="w-40">
                                    <div className="flex items-center justify-center" bis_skin_checked="1">
                                      23/05/2023
                                    </div>
                                </td>
                                <td className="w-40">
                                    <div className="flex items-center justify-center" bis_skin_checked="1">
                                        23/05/2023
                                    </div>
                                </td>
                              <td className="text-center">
                                    <a href="" className="pay-done">Paid</a>
                                  </td>
                                  <td>
                                    <a href="" className="font-medium whitespace-nowrap report">Download Report</a>
                                    
                                </td>
                          </tr>
                          <tr className="intro-x">
                                    <td>
                                      <a href="" className="font-medium whitespace-nowrap">Service 1</a>
                                      <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5" bis_skin_checked="1">Digital Makreting</div>
                                  </td>
                                  <td>
                                      <a href="" className="font-medium whitespace-nowrap">www.google.com</a>
                                      <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5 text-danger" bis_skin_checked="1">Paused</div>
                                  </td>
                                  <td className="text-center">50</td>
                                  <td className="w-40">
                                      <div className="flex items-center justify-center" bis_skin_checked="1">
                                          $50
                                      </div>
                                  </td>
                                  <td className="w-40">
                                      <div className="flex items-center justify-center" bis_skin_checked="1">
                                        23/05/2023
                                      </div>
                                  </td>
                                  <td className="w-40">
                                      <div className="flex items-center justify-center" bis_skin_checked="1">
                                          23/05/2023
                                      </div>
                                  </td>
                              <td className="text-center">
                                      <a href="" className="pay-due">Due</a>
                                    </td>
                                    <td>
                                      <a href="" className="font-medium whitespace-nowrap report">Download Report</a>
                                      
                                  </td>
                          </tr>
                        </tbody>
                    </table>
                </div>
              </div>       
          <NewsLetter />
         </div>
      </div>
    </>
  )
}


export default ProjectList;