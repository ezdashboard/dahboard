import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import About from './components/About';
import FooterForm from './components/FooterForm';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Link from 'next/link';
import Image from 'next/image';
// import routes from './routes';

export default function Abouts({ dataAbout }) {
  const [hiddenTitleIndex, setHiddenTitleIndex] = useState(0);

  const toggleHiddenTitle = (index) => {
      if (hiddenTitleIndex === index) {
        setHiddenTitleIndex(null);
      } else {
        setHiddenTitleIndex(index);
      }
    };
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
  return (
    <>
      <Head>
      <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
       <title>About Us - Creative Agency</title>
       <meta name="description" content="We are a passionate team of Social media creative experts who are committed to assisting companies in flourishing digitally. Contact Us today." /> 
       <link rel="canonical" href="https://www.socialmediacreativeagency.com/about/" />
       <meta property="og:locale" content="en_US" />
       <meta property="og:type" content="article" />
       <meta property="og:title" content="About - Creative Agency" />
       <meta property="og:url" content="https://www.socialmediacreativeagency.com/about/" />
       <meta property="og:site_name" content="Creative Agency" />
       <meta property="article:modified_time" content="2023-02-21T11:51:16+00:00" />
       <meta name="twitter:card" content="summary_large_image" />
       <link rel="stylesheet" type="text/css" href="https://kit-pro.fontawesome.com/releases/v5.15.3/css/pro.min.css"></link>
       <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500&display=swap"></link>
       <script async
        src="https://www.googletagmanager.com/gtag/js?id=G-4T85M437M3"
        
      />
      <script
        dangerouslySetInnerHTML={{ __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){
          dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-4T85M437M3');
      ` }}
      />
      <meta name="google-site-verification" content="muKy4GDWt7CbVzZo5Gly_Z6UieYyZ65RlQsB4ts9uKY" />
      </Head>
      <Navbar />
      <section className="banner-section">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="banner-caption about-us-title">
                     <h2 ><span >AB<img src={"https://smca.ezrankings.in/react-backend/uploads/oshap.png"} className="o-shap" alt=""/>UT</span></h2>
                  </div>
               </div>
            </div>
         </div>
        </section>
        <section className="exp-branding-sec">
           <div className="contianer">
              <div className="title-header">
                 <h2>We are a passionate team of
                    Social media creative experts who are committed to
                    assisting companies in flourishing digitally.
                 </h2>
              </div>
           </div>
        </section>
        <section className="our-mission-sec">
         <div className="container">
            <h2 clsss="mission-title">Our Mission &<br/>
               Vision & Values
            </h2>
         </div>
         <div className="container">
         {dataAbout.about && dataAbout.about.length > 0 && dataAbout.about.map((abtData ,b)=>(
           <span key={b}>
              {(b+1)%2==1 ?
                <div className="row">
                <div className="col-md-6">
                <div className="content-wrap "  >
                   <h3>{abtData.title}</h3>
                   <p>{abtData.description}</p>
                </div>
             </div>
             <div className="col-md-6">
                <div className="icon-wrap"  >
                   <figure>
                      <img src={abtData.img} alt={abtData.alt}/>
                   </figure>
                </div>
             </div>
             </div>
               :
            <div className="row">
            <div className="col-md-6">
               <div className="icon-wrap">
                  <figure>
                     <img src={abtData.img} alt={abtData.alt}/>
                  </figure>
               </div>
            </div>
            <div className="col-md-6">
            <div className="content-wrap "  >
               <h3>{abtData.title}</h3>
               <p>{abtData.description}</p>
            </div>
            </div>
            </div>
             }
            </span>
         ))}
         </div>
      </section>
      <Slider {...settings} className="slick-slider">
          {dataAbout.gallery && dataAbout.gallery.length > 0 && dataAbout.gallery.map((galData, i) => (
                 <div className="item" key={i}>
                    <figure><img src={galData.img}  alt={galData.alt} />
                    </figure>
                 </div>
                ))}
        </Slider>
        <FooterForm />
        <section className="start-retainership-sec  srs2">
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
                       <Link href="" className="">Get Started</Link>
                    </div>
                 </div>
              </div>
           </div>
        </section>
        <section className="faq-section">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h2 className="faq-title">Frequently Asked Questions (FAQs)</h2>
                  <div className="accordion" id="accordionExample" itemScope="" itemProp="mainEntity" itemType="https://schema.org/Question">
                    {dataAbout.faq && dataAbout.faq.length > 0 && dataAbout.faq.map((dataF, i)=>(
                        <div className="accordion-item" key={i}>
                        <h2 className="accordion-header" id={'headingOne'+i} itemProp={dataF.title}>
                            <button className={hiddenTitleIndex === i ? 'accordion-button collapsed openDesc' : 'accordion-button collapsed'} type="button" data-bs-toggle={'collapseOne'+i} data-bs-target={'#collapseOne'+i}  aria-controls={'collapseOne'+i}  onClick={() => toggleHiddenTitle(i)}>
                            {dataF.status}Q.{i+1} {dataF.title}
                            </button>
                        </h2>
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
    </>
  )
}

export async function getStaticProps() {
  const response = await fetch('https://smca.ezrankings.in/react-backend/about.php');
  const dataAbout = await response.json();

  return {
    props: { dataAbout }
  };
}