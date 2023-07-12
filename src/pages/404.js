import Head from 'next/head'
import Link from 'next/link';
import Navbar from './components/Navbar'
 const NotFound = ()=> { 
  return (
    <>
      <Head>
      <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
       <title>404</title>
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
      <section className="exp-branding-sec">
           <div className="contianer">
              <div className="title-header">
                 <h2>Oops, Page you're looking for doesn't exist.</h2>
              </div>
              <div className="content-wrap">
                <div className='row'>
                <div className='col-md-2 offset-5'>
                <Link href="/" className="btn btn-danger" style={{marginLeft:'4rem;'}}>Home Page</Link>
                </div>
                </div>
              </div>
           </div>
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
                            <li><a href="https://www.instagram.com/socialmediacreativeagency/" target="_blank"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="https://www.facebook.com/socialmediacreativeagency" target="_blank"><i className="fab fa-facebook-square"></i></a></li>
                            <li><a href="" target="_blank"><i className="fab fa-twitter"></i></a></li>
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
export default NotFound;