import Head from 'next/head'
import React,{useEffect, useState} from 'react'
import SideBar from './components/SideBar'
import TopHeader from './components/TopHeade'
import Link from 'next/link';
 const NotFound = ()=> { 
  return (
    <>
      <Head>
       <title>404</title>
        <meta charSet="utf-8" />
        <link href="#" rel="shortcut icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content=""/>
        <meta name="keywords" content=""/>
        <meta name="author" content=""/>
        <link rel="dns-prefetch" href="//developers.google.com" />
        <link rel="dns-prefetch" href="//maps.googleapis.com" />
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
                          404 
                      </h2>

                  </div>
                  
                        <p className='page404'>page is not found.</p>
                        <div className="img404">
                          <img src="https://smca.ezrankings.in/dashboard/images/404.png" />
                        </div>
                        <Link className='page404' href= "/dashboard">Go to Dashboard</Link>
                     
              </div>
          </div>
    </>
  )
}
export default NotFound;