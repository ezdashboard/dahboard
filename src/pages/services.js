import React, {useState, useEffect} from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import FooterForm from './components/FooterForm'
import Head from 'next/head'

export default function MyPage({ data }) {
  const [isLoading, setIsLoading] = useState(false);
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
  const [hiddenTitleIndex, setHiddenTitleIndex] = useState(0);

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
      <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
       <title>Our Pricing - Social Media Creative Agency</title>
       <meta name="description" content="Browse this page and get Pricing details of Social Media Creative Agency. We offer Individual, Start Up and Business Plans." />
       <link rel="canonical" href="https://www.socialmediacreativeagency.com/pricing/" />
       <meta property="og:locale" content="en_US" />
       <meta property="og:type" content="article" />
       <meta property="og:title" content="Our Pricing - Social Media Creative Agency" />
       <meta property="og:description" content="Browse this page and get Pricing details of Social Media Creative Agency. We offer Individual, Start Up and Business Plans." />
       <meta property="og:url" content="https://www.socialmediacreativeagency.com/pricing/" />
       <meta property="og:site_name" content="Creative Agency" />
       <meta property="article:modified_time" content="2023-02-27T05:38:59+00:00" />
       <meta name="twitter:card" content="summary_large_image" />
       <link rel="stylesheet" type="text/css" href="https://kit-pro.fontawesome.com/releases/v5.15.3/css/pro.min.css"></link>
       <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500&display=swap"></link>

      </Head>
    <Navbar />
     <section className="banner-section">
      <div className="container">
         <div className="row">
            <div className="col-md-12">
               <div className="banner-caption">
                  <h1 ><span >SERVICES</span></h1>
               </div>
            </div>
         </div>
      </div>
     </section>
     <section className="pricing-sec">
      <div className="container">
          <div className="row">
              <div className="col-md-12 entry-content table-responsive" >
                  <table className="table">
                      <tbody>
                          <tr>
                              <td></td>
                              <td className="redC"><span>Start-Up</span></td>
                              <td className="redC"><span>Economic</span></td>
                              <td className="redC"><span>Business</span></td>
                            </tr>
                            {data.price && data.price.length > 0 && data.price.map((pdata,p)=>(
                              <tr key={p}>
                                <td>{pdata.title}</td>
                                <td className={pdata.colored=="1" ? "fs":""}>{pdata.individual}</td>
                                <td className={pdata.colored=="1" ? "fs":""}>{pdata.start_up}</td>
                                <td className={pdata.colored=="1" ? "fs":""}>{pdata.business}</td>
                              </tr>
                            ))}
                      </tbody>
                    </table>
              </div>
          </div>
      </div>
  </section>
  <section className="faq-section">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h2 className="faq-title">Frequently Asked Questions (FAQs)</h2>
                  <div className="accordion" id="accordionExample" itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question">
                    {data.faq && data.faq.length > 0 && data.faq.map((dataF, i)=>(
                        <div className="accordion-item" key={i}>
                        <h2 className="accordion-header" id={'headingOne'+i} itemprop={dataF.title}>
                            <button className={hiddenTitleIndex === i ? 'accordion-button collapsed openDesc' : 'accordion-button collapsed'} type="button" data-bs-toggle={'collapseOne'+i} data-bs-target={'#collapseOne'+i}  aria-controls={'collapseOne'+i}  onClick={() => toggleHiddenTitle(i)}>
                            {dataF.status}Q.{i+1} {dataF.title}
                            </button>
                        </h2>
                        <div id={'collapseOne'+i} aria-labelledby={'headingOne'+i} data-bs-parent="#accordionExample" itemscope="" itemprop={dataF.description} itemtype="https://schema.org/Answer">
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
    <Slider {...settings} className="slick-slider">
          {data.gallery && data.gallery.length > 0 && data.gallery.map((galData, i) => (
                 <div className="item" key={i}>
                    <figure><img src={galData.img}  alt={galData.alt} />
                    </figure>
                 </div>
                ))}
        </Slider>
        <section className="start-retainership-sec srs2 ">
         <div className="continer">
            <div className="row">
               <div className="col-md-12">
                  <div className="content-wrap">
                     <p>We believe that every business
                        is <span>unique and deserves excellent and customized
                        social media creatives,</span> thats why we take the time to
                        develop an enduring connection with our clients.
                     </p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-12">
                  <div className="content-wrap2">
                     <h2>Lets create something
                        amazing together.
                     </h2>
                     <a href="" className="">Get Started</a>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <FooterForm/>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://smca.ezrankings.in/react-backend/pricing.php');
  const data = await response.json();

  return {
    props: { data }
  };
}
