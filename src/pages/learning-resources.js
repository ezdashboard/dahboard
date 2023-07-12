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
        <meta charset="utf-8" />
        <link href="#" rel="shortcut icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content=""/>
        <meta name="keywords" content=""/>
        <meta name="author" content=""/>
        <title>Learning Dashboard</title>
        <link rel="dns-prefetch" href="//developers.google.com" />
        <link rel="dns-prefetch" href="//maps.googleapis.com" />
        <link href="https://kit-pro.fontawesome.com/releases/v5.15.3/css/pro.min.css" rel="stylesheet" />
        <script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.2.2/Chart.min.js'></script>
        <script src="http://122.160.48.132/dev/html/reseller-dashboardjs/markerclusterer.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCcUcow5QHjitBVOfkTdy44l7jnaoFzW1k&amp;libraries=places"></script>
        <script src="http://122.160.48.132/dev/html/reseller-dashboard/js/app.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TweenMax.min.js"></script>
        
        </Head>
        <div class="flex mt-[4.7rem] md:mt-0">
       <SideBar />
              <div class="content">
            <TopHeader />
                  <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
                      <h2 class="text-lg font-medium mr-auto">
                          Resources
                      </h2>
{sideBarAccess.users &&  <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
                          <button class="btn btn-primary shadow-md mr-2">Add New</button>
                      </div>}
                  </div>
                  
                  <div class="intro-y grid grid-cols-12 gap-6 mt-5">
                      <div class="intro-y col-span-12 md:col-span-6 xl:col-span-4 box learning-res">
                          <div class="2xl:h-56 image-fit">
                                  <img alt="" src="http://122.160.48.132/dev/html/reseller-dashboard/images/web-develop.jpg" />
                              </div>
                          <div class="learning-box">
                              
                              <Link href="#" class="block font-medium text-base">Web Designing &amp; Development</Link> 
                                <div class="flex text-slate-500 truncate text-xs mt-0.5"> <a class="text-primary inline-block truncate" href="">Admin </a> <span class="mx-1">•</span> 21 seconds ago </div>
                              <div class="text-slate-600 dark:text-slate-500 mt-2"><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20</p></div>
                              <Link href="#" class="ml-auto flex items-center text-primary">Read More</Link>
                          </div>
                      </div>
                      <div class="intro-y col-span-12 md:col-span-6 xl:col-span-4 box learning-res">
                          <div class="2xl:h-56 image-fit">
                                  <img alt="" src="http://122.160.48.132/dev/html/reseller-dashboard/images/seo.jpg" />
                              </div>
                          <div class="learning-box">
                              
                              <Link href="#" class="block font-medium text-base">Web Designing &amp; Development</Link> 
                                <div class="flex text-slate-500 truncate text-xs mt-0.5"> <Link class="text-primary inline-block truncate" href="">Admin </Link> <span class="mx-1">•</span> 21 seconds ago </div>
                              <div class="text-slate-600 dark:text-slate-500 mt-2"><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20</p></div>
                              <Link href="#"class="ml-auto flex items-center text-primary">Read More</Link>
                          </div>
                      </div>
                      <div class="intro-y col-span-12 md:col-span-6 xl:col-span-4 box learning-res">
                         <div class="2xl:h-56 image-fit">
                                  <img alt="" src="http://122.160.48.132/dev/html/reseller-dashboard/images/smo.jpg" />
                              </div>
                              <div class="learning-box">
                              
                              <Link href="#" class="block font-medium text-base">Web Designing &amp; Development</Link> 
                                <div class="flex text-slate-500 truncate text-xs mt-0.5"> <a class="text-primary inline-block truncate" href="">Admin </a> <span class="mx-1">•</span> 21 seconds ago </div>
                              <div class="text-slate-600 dark:text-slate-500 mt-2"><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20</p></div>
                              <Link href="#" class="ml-auto flex items-center text-primary">Read More</Link>
                          </div>
                      </div>
                      
                  </div>
                  
                    <div class="intro-y grid grid-cols-12 gap-6 mt-5">
                      <div class="intro-y col-span-12 md:col-span-6 xl:col-span-4 box learning-res">
                          <div class="2xl:h-56 image-fit">
                                  <img alt="" src="http://122.160.48.132/dev/html/reseller-dashboard/images/web-develop.jpg" />
                              </div>
                          <div class="learning-box">
                              
                              <Link href="#" class="block font-medium text-base">Web Designing &amp; Development</Link> 
                                <div class="flex text-slate-500 truncate text-xs mt-0.5"> <a class="text-primary inline-block truncate" href="">Admin </a> <span class="mx-1">•</span> 21 seconds ago </div>
                              <div class="text-slate-600 dark:text-slate-500 mt-2"><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20</p></div>
                              <Link href="#" class="ml-auto flex items-center text-primary">Read More</Link>
                          </div>
                      </div>
                      <div class="intro-y col-span-12 md:col-span-6 xl:col-span-4 box learning-res">
                          <div class="2xl:h-56 image-fit">
                                  <img alt="" src="http://122.160.48.132/dev/html/reseller-dashboard/images/seo.jpg" />
                              </div>
                          <div class="learning-box">
                              
                              <Link href="#" class="block font-medium text-base">Web Designing &amp; Development</Link> 
                                <div class="flex text-slate-500 truncate text-xs mt-0.5"> <a class="text-primary inline-block truncate" href="">Admin </a> <span class="mx-1">•</span> 21 seconds ago </div>
                              <div class="text-slate-600 dark:text-slate-500 mt-2"><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20</p></div>
                              <Link href="#" class="ml-auto flex items-center text-primary">Read More</Link>
                          </div>
                      </div>
                      <div class="intro-y col-span-12 md:col-span-6 xl:col-span-4 box learning-res">
                         <div class="2xl:h-56 image-fit">
                                  <img alt="" src="http://122.160.48.132/dev/html/reseller-dashboard/images/smo.jpg" />
                              </div>
                              <div class="learning-box">
                              <Link href="#" class="block font-medium text-base">Web Designing &amp; Development</Link> 
                                <div class="flex text-slate-500 truncate text-xs mt-0.5"> <a class="text-primary inline-block truncate" href="">Admin </a> <span class="mx-1">•</span> 21 seconds ago </div>
                              <div class="text-slate-600 dark:text-slate-500 mt-2"><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20</p></div>
                              <Link href="#" class="ml-auto flex items-center text-primary">Read More</Link>
                          </div>
                      </div>
                  </div>
                  
                      {/* <div class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
                          <nav class="w-full sm:w-auto sm:mr-auto">
                              <ul class="pagination">
                                  <li class="page-item">
                                      <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevrons-left"></i> </a>
                                  </li>
                                  <li class="page-item">
                                      <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevron-left"></i> </a>
                                  </li>
                                  <li class="page-item"> <a class="page-link" href="#">...</a> </li>
                                  <li class="page-item"> <a class="page-link" href="#">1</a> </li>
                                  <li class="page-item active"> <a class="page-link" href="#">2</a> </li>
                                  <li class="page-item"> <a class="page-link" href="#">3</a> </li>
                                  <li class="page-item"> <a class="page-link" href="#">...</a> </li>
                                  <li class="page-item">
                                      <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevron-right"></i> </a>
                                  </li>
                                  <li class="page-item">
                                      <a class="page-link" href="#"> <i class="w-4 h-4" data-lucide="chevrons-right"></i> </a>
                                  </li>
                              </ul>
                          </nav>
                          <select class="w-20 form-select box mt-3 sm:mt-0">
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