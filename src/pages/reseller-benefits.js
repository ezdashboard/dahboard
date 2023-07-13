import React, {useState, useEffect} from 'react'
import Head from 'next/head'
// import routes from './routes';
import Link from 'next/link';
import SideBar from './components/SideBar';
import TopHeader from './components/TopHeade';
import NewsLetter from './components/NewsLetter';


 const ResellerBenefits = ()=> {

    // useEffect(() => {

    //   }, []);
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


const settings = {
  centerMode: true,
  autoplay: false,
  autoplaySpeed: 1000,
  slidesToShow: 4,
  dots: true,
  arrows: true,
  swipe: true,
  infinite: true,
  swipeToSlide: true, responsive: [{
    breakpoint: 768,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
    }
  }
]
  };
  const toggleHiddenTitle = (index) => {
    if (hiddenTitleIndex === index) {
      setHiddenTitleIndex(null);
    } else {
      setHiddenTitleIndex(index);
    }
  };
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
        <script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.2.2/Chart.min.js'></script>  
        <script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TweenMax.min.js"></script>
    </Head>
    <div className="flex mt-[4.7rem] md:mt-0">
        <SideBar />
        <div className="content">    
        <TopHeader />
                <div className="intro-y flex items-center h-10 mt-8">
                    <h2 className="text-lg font-medium truncate mr-5">Reseller Benefits</h2>
                        <a href="#" className="ml-auto flex items-center text-primary">
                        <i data-lucide="refresh-ccw" className="w-4 h-4 mr-3"></i> Reload
                    </a>
                </div>
            <div className="grid grid-cols-12 gap-6 mt-5">
                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                        <a href="free-website-analysis.php">
                        <div className="report-box zoom-in">
                            <div className="box p-5">
                                <div className="flex">
                                    <i data-lucide="shopping-cart" className="report-box__icon text-primary"></i>
                                </div>
                                <div className="text-3xl font-medium leading-8 mt-6"><b>(1/10)</b></div>
                                <div className="text-base text-slate-500 mt-1">Free Website Analysis</div>
                            </div>
                        </div>
                        </a>
                </div>
                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                   <a href="keyword-analysis.php">
                         <div className="report-box zoom-in">
                        <div className="box p-5">
                            <div className="flex">
                                <i data-lucide="credit-card" className="report-box__icon text-pending"></i>
                            </div>
                            <div className="text-3xl font-medium leading-8 mt-6"><b>(1/10)</b></div>
                            <div className="text-base text-slate-500 mt-1">Keywords Analysis</div>
                        </div>
                    </div>
                    </a>
                </div>
                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <a href="free-festive-images.php">
                        <div className="report-box zoom-in">
                        <div className="box p-5">
                            <div className="flex">
                                <i data-lucide="monitor" className="report-box__icon text-warning"></i>
                            </div>
                            <div className="text-3xl font-medium leading-8 mt-6"><b>(1/10)</b></div>
                            <div className="text-base text-slate-500 mt-1">Free Festive Images</div>
                        </div>
                    </div>
                    </a>
                </div>
                <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                    <a href="free-gmb-keywords.php">
                        <div className="report-box zoom-in">
                        <div className="box p-5">
                            <div className="flex">
                                <i data-lucide="user" className="report-box__icon text-success"></i>
                            </div>
                            <div className="text-3xl font-medium leading-8 mt-6">(1/20)</div>
                            <div className="text-base text-slate-500 mt-1">Free GMB Keywords</div>
                        </div>
                    </div>
                    </a>
                </div>
            </div> 
        </div> 
    </div>
    </>
  )
}


export default ResellerBenefits;