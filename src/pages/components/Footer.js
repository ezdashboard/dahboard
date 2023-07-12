import React from 'react'
import FooterForm from './FooterForm'
import Faq from './Faq'

const Footer = () => {
  return (
    <>
    {/* <FooterForm /> */}
    {/* <Faq faqData=""/> */}
     <footer>
         <div className="container">
            <div className="row">
            <div className="whatsapp" bis_skin_checked="1">
               <a href="https://wa.me/+919599389388" target="_blank">
               <img src="https://smca.ezrankings.in/react-backend/uploads/whatsapp.png" className="img-responsive" alt="whatsapp" width="50" height="50"/></a>
            </div>
               <div className="col-md-3">
                  <div className="footer-item">
                     <ul>
                        <li><a href="" target="_blank">info@socialmediacreativeagency.com</a></li>
                        <li>Phone: <a href="tel:+91-9599389388">+91-9599389388</a></li>
                        {/* <li>WhatsApp: <a href="https://api.whatsapp.com/send?phone=+919599389388&amp;text=Hello!" target="_blank">+91-9599389388</a></li> */}
                     </ul>
                  </div>
               </div>
               <div className="col-md-3 ms-auto">
                  <div className="footer-item">
                     <ul className="social-icon">
                        <li><a href="https://www.instagram.com/socialmediacreativeagency/" target="_blank" rel="nofollow"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.facebook.com/socialmediacreativeagency" target="_blank" rel="nofollow"><i className="fab fa-facebook-square"></i></a></li>
                        <li><a href="" target="_blank" rel="nofollow"><i className="fab fa-twitter"></i></a></li>
                     </ul>
                  </div>
               </div>
               <div className="col-md-12">
                  <div className="copyright">
                  <p>Copyright © 2023 <a href="https://www.socialmediacreativeagency.com">Social Media Creative Agency</a> All Rights Reserved.</p>
                  </div>
               </div>
            </div>
         </div>
      </footer>
    </>
  )
}

export default Footer
