import React, {useState, useEffect} from 'react'
import ContactForm  from './ContactForm.js'
import Faq from './Faq.js'
import axios from 'axios';

import Link from 'next/link';

const Contact = () => {
   const [faqData, setFaqData] = useState([]);

   const fetchData = async () => {

      axios.get(`https://smca.ezrankings.in/react-backend/contactData.php`)
        .then(res => {
            const data = res.data.faq.map((item, k) => {
              return {
                id: item.id,
                title: item.title,
                status: k == 0 ? true : false,
                description: item.description
              }
          }
        )
       setFaqData(data);
        // console.log("vikas",imgData);
      })
      .catch(err => {
       })
   }
   useEffect(() => {
     fetchData();
 }, [])
  return (
    <>
    <div className='contact-page'>
     <section className="banner-section">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                <div className="banner-caption">
                    <h1 ><span >C<img src={"https://smca.ezrankings.in/react-backend/uploads/oshap.png"} className="o-shap" alt=""/>NTACT</span></h1>
                 </div>
               </div>
            </div>
         </div>
      </section>
      <section className="start-retainership-sec ">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="content-wrap2">
                     <h2>Let’s create something amazing together.
                     </h2>
                     <Link href="" className="">Get Started</Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className="">
        <div className="container">

          <ContactForm />
            {/* <div className="contact-us-email">
                 <h2><a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfttvVVhZpCHNdbDnbmGLtwZsZDQRjVCpsBkcfXtwLbNGSGdpfbntHPzZdnknsvvLKSJNq" target="_blank">hello@smcr.com</a></h2>
            </div> */}
            {/* <div className="content-wrap">
                 <p>We believe that every business is unique and deserves excellent and customized social media creatives, thats why we take the time to develop an enduring connection with our clients.
                 </p>
            </div> */}
       
        </div>
      </section>
      
      <section className="form-section">
        <div className="container">
        <div className="row">
          <div className="col-md-12">
           <div className="contact-us-email">
                 <h2><a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfttvVVhZpCHNdbDnbmGLtwZsZDQRjVCpsBkcfXtwLbNGSGdpfbntHPzZdnknsvvLKSJNq" target="_blank">info@socialmediacreativeagency.com</a></h2>
            </div> 
            <div className="content-wrap">
              <p>We believe that every business 
              is <span>unique and deserves excellent and customized 
              social media creatives,</span> that's why we take the time to 
              develop an enduring connection with our clients.
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>
      <Faq faqData={faqData} />
    </div>
    </>
  )
}

export default Contact
