import React, {useState, useEffect} from 'react'
import AboutContent from './AboutContent'
import axios from 'axios';
import Link from 'next/link';
import Faq from './Faq'
import PortfolioSlider from './PortfolioSlider'
import FooterForm from './FooterForm';

const About = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [aboutData, setAboutData] = useState([]);
  const [imgData, setImgData] = useState([]);
  const [faqData, setFaqData] = useState([]);

  const fetchData = async () => {

     axios.get(`https://smca.ezrankings.in/react-backend/about.php`)
       .then(res => {
           const data = res.data.about.map((item) => {
             return {
               id: item.id,
               alt: item.alt,
               title: item.title,
               description: item.description,
               image: item.img
             }
         }
       )
       const faqqData = res.data.faq.map((item, k) => {
         return {
           id: item.id,
           title: item.title,
           status: k == 0 ? true : false,
           description: item.description
         }
     }
   )
   const Sldata = res.data.gallery.map((item) => {
      return {
        id: item.id,
        alt: item.alt,
        image: item.img
      }
  }
)
      setImgData(Sldata);
      setFaqData(faqqData);
      setAboutData(data);
     })
     .catch(err => {
      })
  }
  useEffect(() => {
   fetchData();
}, [])

  return (
    <>

       <section className="banner-section">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="banner-caption">
                     <h1 ><span >AB<img src={"https://smca.ezrankings.in/react-backend/uploads/oshap.png"} className="o-shap" alt=""/>UT</span></h1>
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
        <AboutContent aboutContentData = {aboutData}/>
        <PortfolioSlider imgData={imgData} />

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
        <FooterForm />
        <Faq faqData={faqData} />

      </>
    )
  }

export default About
