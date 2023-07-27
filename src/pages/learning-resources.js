import Head from 'next/head'
import React,{useEffect, useState} from 'react'
import SideBar from './components/SideBar'
import TopHeader from './components/TopHeade'
import Link from 'next/link';

const Learning = ()=>{
    const [sideBarAccess, setSideBarAccess] = useState({
        users: false
    });
    useEffect(() => {
        if(localStorage && localStorage.length > 0 && localStorage.type && localStorage.type=="admin"){
            setSideBarAccess({
                users : true
            })
        }
       
        }, []);
    return(
        <>
        <Head>
        <meta charSet="utf-8" />
        <link href="#" rel="shortcut icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content=""/>
        <meta name="keywords" content=""/>
        <meta name="author" content=""/>
        <title>Learning Dashboard</title>
        <link rel="dns-prefetch" href="//developers.google.com" />
        <link rel="dns-prefetch" href="//maps.googleapis.com" />
        <script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.2.2/Chart.min.js'></script>
        <script src="https://smca.ezrankings.in/dashboard/js/markerclusterer.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCcUcow5QHjitBVOfkTdy44l7jnaoFzW1k&amp;libraries=places"></script>
        <script src="https://smca.ezrankings.in/dashboard/js/app.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TweenMax.min.js"></script>
        
        </Head>
        <div className="flex mt-[4.7rem] md:mt-0">
       <SideBar />
              <div className="content">
            <TopHeader />
                  <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
                      <h2 className="text-lg font-medium mr-auto">
                          Resources
                      </h2>
{sideBarAccess.users &&  <div className="w-full sm:w-auto flex mt-4 sm:mt-0">
                          <button className="btn btn-primary shadow-md mr-2">Add New</button>
                      </div>}
                  </div>
                  
                  <div className="intro-y grid grid-cols-12 gap-6 mt-5">
                      <div className="intro-y col-span-12 md:col-span-6 xl:col-span-4 box learning-res">
                          <div className="2xl:h-56 image-fit">
                                  <img alt="" src="https://smca.ezrankings.in/dashboard/images/web-develop.jpg" />
                              </div>
                          <div className="learning-box">
                              
                              <Link href="#" className="block font-medium text-base">Web Designing &amp; Development</Link> 
                                <div className="flex text-slate-500 truncate text-xs mt-0.5"> <a className="text-primary inline-block truncate" href="">Admin </a> <span className="mx-1">•</span> 21 seconds ago </div>
                              <div className="text-slate-600 dark:text-slate-500 mt-2"><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 20</p></div>
                              <Link href="#" className="ml-auto flex items-center text-primary">Read More</Link>
                          </div>
                      </div>

                  </div>
                  
                      {/* <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
                          <nav className="w-full sm:w-auto sm:mr-auto">
                              <ul className="pagination">
                                  <li className="page-item">
                                      <a className="page-link" href="#"> <i className="w-4 h-4" data-lucide="chevrons-left"></i> </a>
                                  </li>
                                  <li className="page-item">
                                      <a className="page-link" href="#"> <i className="w-4 h-4" data-lucide="chevron-left"></i> </a>
                                  </li>
                                  <li className="page-item"> <a className="page-link" href="#">...</a> </li>
                                  <li className="page-item"> <a className="page-link" href="#">1</a> </li>
                                  <li className="page-item active"> <a className="page-link" href="#">2</a> </li>
                                  <li className="page-item"> <a className="page-link" href="#">3</a> </li>
                                  <li className="page-item"> <a className="page-link" href="#">...</a> </li>
                                  <li className="page-item">
                                      <a className="page-link" href="#"> <i className="w-4 h-4" data-lucide="chevron-right"></i> </a>
                                  </li>
                                  <li className="page-item">
                                      <a className="page-link" href="#"> <i className="w-4 h-4" data-lucide="chevrons-right"></i> </a>
                                  </li>
                              </ul>
                          </nav>
                          <select className="w-20 form-select box mt-3 sm:mt-0">
                              <option>10</option>
                              <option>25</option>
                              <option>35</option>
                              <option>50</option>
                          </select>
                      </div> */}
              </div>
          
          
          </div>
        </>
    )
}
export default Learning