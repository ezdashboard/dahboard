import Head from 'next/head'
import Home from './components/Home';
import Navbar from './components/Navbar'
import Footer from './components/Footer';

// import routes from './routes';

 const ThankYou = ()=> {
  return (
    <>
      <Head>
      <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
      <title>Full-Service Social Media Marketing Agency in India - Social Media Creative Agency</title>
      <meta name="keywords" content="social media creative agency, creative social media services, creative agency social media posts, full service creative agency, best creative agency in india, top creative agencies, best social media agency in india, social media management agency, white label social media management, best social media marketing agency" />
      <meta name="description" content="Looking for creative Social Media Services to promote your brand?? SMCA is full-service creative agency based in India, offers white label social media management services for clients. Get top-notch quality social media posts services from the experts." />
      <link rel="canonical" href="https://www.socialmediacreativeagency.com/" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="The Best Social Media Marketing Agency in India - Social Media Creative Agency (SMCA)" />
      <meta property="og:description" content="Looking for creative Social Media Services to promote your brand?? SMCA is full-service creative agency based in India, offers white label social media management services for clients. Get top-notch quality social media posts services from the experts." />
      <meta property="og:url" content="https://www.socialmediacreativeagency.com/" />
      <meta property="og:site_name" content="Creative Agency" />
      <meta property="article:modified_time" content="2023-02-27T05:38:12+00:00" />
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
      <section className="start-retainership-sec ">
           <div className="continer">
              <div className="row">
                 <div className="col-md-12">
                    <div className="content-wrap">
        <h1 className="thankyou">Thank you for submitting.</h1>
        </div></div></div></div>
      </section>
      <footer>
         <div className="container">
            <div className="row">
               <div className="col-md-3">
                  <div className="footer-item">
                     <ul>
                        <li><a href="" target="_blank">info@socialmediacreativeagency.com</a></li>
                        <li>Phone: <a href="tel:+91-9599389388">+91-9599389388</a></li>
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
export default ThankYou;
