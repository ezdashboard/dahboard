import React, {useState, useEffect} from 'react'
import PortfolioSlider from './PortfolioSlider'
// import Faq from './Faq'
// import Oshap from '../assets/images/oshap.png'
import axios from 'axios';
// import { NavLink } from 'react-router-dom';
// import {Helmet} from "react-helmet";
import Link from 'next/link';
import FooterForm from './FooterForm';
// import Image from 'next/image'
import Faq from './Faq';


const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imgData, setImgData] = useState([]);
  const [faqData, setFaqData] = useState([]);
  const fetchData = async () => {

     axios.get(`https://smca.ezrankings.in/react-backend/homes.php`)
       .then(res => {
           const data = res.data.gallery.map((item) => {
             return {
               id: item.id,
               alt: item.alt,
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
      setImgData(data);
      setFaqData(faqqData);

       // console.log("vikas",imgData);
     })
     .catch(err => {
      })
  }
  useEffect(() => {
    fetchData();
}, [])

  return (
  <div>

      <section className="banner-section">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="banner-caption">
                     <h1 >We Love <span >St<img src={"https://smca.ezrankings.in/react-backend/uploads/oshap.png"} className="o-shap" alt=""/>ries</span></h1>
                     <p>We Love to visualize stories beacuse we love people and they inspire us.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="exp-branding-sec">
         <div className="contianer">
            <div className="title-header">
               <h2>We’re an experienced branding agency with more than <span>seven hundred projects </span>
                  under our belt.
               </h2>
            </div>
         </div>
         <PortfolioSlider imgData={imgData} />
      </section>
      <section className="start-retainership-sec ">
         <div className="continer">
            <div className="title-header">
               <h2>Let's Start Retainership with us</h2>
               <div className="currency-wrap">
                  <div className="dollor-wrap">
                     <sup>$</sup>150
                  </div>
                  <div className="divider">/</div>
                  <div className="rupee-wrap">
                     <sup>₹</sup>7000<sub>Per month</sub>
                  </div>
               </div>
               <Link href="" className="btn-border">Take an Expert</Link>
            </div>
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
                     <h2>Let's create something
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
   </div>
  )
}

export default Home
