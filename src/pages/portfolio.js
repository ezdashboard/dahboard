import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Portfolio from './components/Portfolio';
import axios from 'axios';

import Navbar from './components/Navbar'
import Footer from './components/Footer';
import FooterForm from './components/FooterForm';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Link from 'next/link';
// import routes from './routes';

//  const PortfolioIndex = ()=> {
  export default function PortfolioIndex({ portData }) {
    const [hiddenTitleIndex, setHiddenTitleIndex] = useState(1);
    const [currentPage, setCurrentPage] = useState(2);
    const [startImg, setStartImg] = useState(0);
    const[toImg, setToImg]= useState(9);
    let blogDatta;
    let blogWDatta;
    if(portData && portData.blog && portData.blog.length > 0){
      blogDatta = portData.blog;
    }
    // if(portData && portData.gallery && portData.gallery.length > 0){
    //   blogWDatta = portData.gallery;
    // }
    const [postList, setPostList] = useState(blogDatta);
    // const [postwList, setPostwList] = useState(blogWDatta);

    const toggleHiddenTitle = (index) => {
        if (hiddenTitleIndex === index) {
          setHiddenTitleIndex(null);
        } else {
          setHiddenTitleIndex(index);
        }
      };
      const settings = {

        autoplay: false,
        autoplaySpeed: 1000,
        slidesToShow: 2,
        dots: true,
        arrows: true,
        responsive: [
       {
         breakpoint: 768,
         settings: {
         slidesToShow: 1,
         slidesToScroll: 1
         }
       }
      ]
    } 
    const Fancybox = {
      
    }
   // console.log('vv',Fancybox);
    // async function handleNextPage() {
    //   const response = await axios.get(`https://smca.ezrankings.in/react-backend/portData.php?page=${currentPage}`);
    //   const newPosts = response.data;
    //  setPostList((prevPosts) => [...prevPosts, ...response.data.blog]);
    //        setCurrentPage(currentPage + 1);

    // }
    const handleNextPage = () => {
      // setCurrentPage(currentPage + 1);
      //setStartImg(toImg);
      setToImg(toImg+3);

    }    
  return (
    <>
      <Head>
    <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
    <title>Our Portfolio - Social Media Creative Agency</title>
    <meta name="description" content="Find the list of Social Media projects which has been done by Social Media Creative Agency with good results." />
    <link rel="canonical" href="https://www.socialmediacreativeagency.com/portfolio/" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="Our Portfolio - Social Media Creative Agency" />
    <meta property="og:description" content="Find the list of Social Media projects which has been done by Social Media Creative Agency with good results." />
    <meta property="og:url" content="https://www.socialmediacreativeagency.com/portfolio/" />
    <meta property="og:site_name" content="Creative Agency" />
    <meta property="article:modified_time" content="2023-02-27T05:41:03+00:00" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="stylesheet" type="text/css" href="https://kit-pro.fontawesome.com/releases/v5.15.3/css/pro.min.css"></link>
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500&display=swap"></link>
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css"></link>
    
    
   
   
   <script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js"></script>
   
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-4T85M437M3" />
      <script
        dangerouslySetInnerHTML={{ __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){
          dataLayer.push(arguments);
        }
        gtag('js', new Date());
      `     
    }}
      
      />

      <meta name="google-site-verification" content="muKy4GDWt7CbVzZo5Gly_Z6UieYyZ65RlQsB4ts9uKY" />
      </Head>
      <Navbar />

      <section className="porfolio-slider">
        <div className="container">
            <div className="row">
                <div className="col-md-9 mx-auto">
                    <div className="slider-porfolio">
                    <Slider {...settings} className="slick-slider2">
                      
                      {portData && portData.gallery && portData.gallery.length > 0 && portData.gallery.map((data, i)=>(
                        <div className="item" key={i}>
                          <figure><img src={data.image} alt={data.alt}/>
                          </figure>
                        </div>
                      ))}
                    </Slider>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="portfolio-sec">
  <div className="container">
      <div className="row">
      {postList && postList.slice(startImg,toImg).map((blogImg, b) =>(
        <div className="col-md-4" key={b}>
            <div className="portfolio-card">
                <figure> <a href={blogImg.image} data-fancybox="gallery" data-caption={blogImg.alt}>
                    <img src={blogImg.image} alt={blogImg.alt} />
                    <span className="zoom-img"><i className="fas fa-search-plus"></i></span>
                  </a>
                </figure>
            </div>
        </div>
      ))}
      {postList && postList.map((blogImg, b) =>(
        <div className="col-md-4" key={b}>
            <div className="portfolio-card hide">
                <figure> <a href={blogImg.image} data-fancybox="gallery" data-caption={blogImg.alt}>
                    <img src={blogImg.image} alt={blogImg.alt} />
                    <span className="zoom-img"><i className="fas fa-search-plus"></i></span>
                  </a>
                </figure>
            </div>
        </div>
      ))}      
        <div className="col-md-12">
            <div className="load-more-btn">
                <a onClick={handleNextPage}>Load More</a>
            </div>
        </div>
      </div>
  </div>
</section>
      <section className="start-retainership-sec ">
        <div className="continer">
          <div className="row">
            <div className="col-md-12">
              <div className="content-wrap">
                <p>We believe that every business 
                is <span>unique and deserves excellent and customized 
                social media creatives,</span> that's why we take the time to 
                develop an enduring connection with our clients.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="content-wrap2">
                <h2>Let’s create something 
                amazing together.
                </h2>
                <Link href="/contact" className="">Get Started</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterForm />
        <section className="faq-section">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h2 className="faq-title">Frequently Asked Questions (FAQs)</h2>
                  <div className="accordion" id="accordionExample" itemScope="" itemProp="mainEntity" itemType="https://schema.org/Question">
                    {portData.faq && portData.faq.length > 0 && portData.faq.map((dataF, i)=>(
                        <div className="accordion-item" key={i}>
                        <h2 className="accordion-header" id={'headingOne'+i} itemProp={dataF.title}>
                            <button className={hiddenTitleIndex === i ? 'accordion-button collapsed openDesc' : 'accordion-button collapsed'} type="button" data-bs-toggle={'collapseOne'+i} data-bs-target={'#collapseOne'+i}  aria-controls={'collapseOne'+i}  onClick={() => toggleHiddenTitle(i)}>
                            {dataF.status}Q.{i+1} {dataF.title}
                            </button>
                        </h2>
                        {/* <p className="hide">vikasGwl</p> */}
                        <div id={'collapseOne'+i} aria-labelledby={'headingOne'+i} data-bs-parent="#accordionExample" itemScope="" itemProp={dataF.description} itemType="https://schema.org/Answer">
                            <div className={hiddenTitleIndex === i ? 'accordion-body' :''}>
                            {hiddenTitleIndex === i && <div dangerouslySetInnerHTML={{ __html: dataF.description}} />}
                            </div>
                        </div>
                    </div>
                    ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
      <Footer />
      <script
        dangerouslySetInnerHTML={{ __html: `
        Fancybox.bind("[data-fancybox]", {
          // Your custom options
      });
      ` 
    }}
      
      />
    </>
  )
}
// export default PortfolioIndex;

// export async function getStaticProps() {
//   let currNo = 1;
//   const response = await fetch(``);
//   const portData = await response.json();
//   const callFunn =()=>{
//     alert();
//   }
//   return {
//     props: { portData }
//   };
// }

export async function getServerSideProps(data) {
  console.log('ggggggg'+data)
  let currNo = 1;
  const response = await axios.get(`https://smca.ezrankings.in/react-backend/portData.php?page=${currNo}`);
  const portData = response.data;
  return {
    props: {
      portData,
    },
  };
}