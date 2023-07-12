import Link from 'next/link';
import Image from 'next/image'
import React, {useState} from 'react'
import { useRouter } from "next/router";
 
const Navbar = () => {
   const router = useRouter();
   const [mobileToggle, setMobileToggle] = useState(false);
   const [toggleStatus, setToggleStatus] = useState('');
   const funToggleStatus = ()=>{
      if(toggleStatus){
         setToggleStatus('');
      }else{
         setToggleStatus('dropdown-item');
      }
   }
  return (
  
      <header>
         <div className="top-header" bis_skin_checked="1">
            <div className="container" bis_skin_checked="1">
               <div className="row" bis_skin_checked="1">
                     <div className="col-md-12" bis_skin_checked="1">
                        <ul>
                           <li><a href="skype:84d04ee8fc094c1c"> <i className="fab fa-skype"></i> <span>Contact SMCA</span></a></li>                           
                           <li><a href="tel: (+91-9599389388)"> <i className="far fa-phone-alt"></i> <span>+91-9599389388</span></a></li>
                           <li><a href="mailto:info@socialmediacreativeagency.com"> <i className="fal fa-envelope"></i><span> info@socialmediacreativeagency.com</span></a></li>
                        </ul>
                     </div>
               </div>
            </div>
         </div>
         <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
               <Link className="navbar-brand" href="/"><img src={"https://smca.ezrankings.in/react-backend/uploads/logo.png" } className="header-logo" alt=""/></Link>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>setMobileToggle(!mobileToggle)}>
                   <span className="navbar-toggler-icon"></span>
               </button>
               <div className={`collapse navbar-collapse ${mobileToggle ? 'show' : ''}`} id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <Link href="/" className={router.pathname == "/" ? "nav-link active" : "nav-link"} aria-current="page">
                           Home
                        </Link>
                     </li>
                     <li className="nav-item">
                      <Link href="/about" className={router.pathname == "/about" ? "nav-link active" : "nav-link"}>
                      About
                     </Link>
                     </li>
                     <li className="nav-item">
                     <Link href="/portfolio" className={router.pathname == "/portfolio" ? "nav-link active" : "nav-link"}>
                     Portfolio
                     </Link>
                     </li>
                     {/* <li className="nav-item">
                     <Link href="/services" className={router.pathname == "/services" ? "nav-link active" : "nav-link"}>
                     Services
                     </Link> */}
                        {/* <ul>
                           <li>
                              <Link href="/social-media-marketing-agency-in-india" className={router.pathname == "/social-media-marketing-agency-in-india" ? "nav-link active" : "nav-link"}>
                                 Social Media Marketing Agency in India
                              </Link>
                           </li>  
                           <li>
                              <Link href="/white-label-social-media-management-agency" className={router.pathname == "/white-label-social-media-management-agency" ? "nav-link active" : "nav-link"}>
                                  white label social media management agency
                              </Link>
                           </li>                            
                        </ul> */}
                     {/* </li>   */}
                     {/* <li className="nav-item dropdown" onClick={funToggleStatus}>
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                     {<ul className={'dropdown-menu  '+toggleStatus}>
                           <li><Link className="dropdown-item" href="/social-media-marketing-agency-in-india"> Media Marketing Agency in India</Link></li>
                           <li><Link className="dropdown-item" href="/white-label-social-media-management-agency">White Label Social Media Management Agency
                        </Link></li>
                        </ul>}
                     </li>                                         */}
                     <li className="nav-item">
                     <Link href="/pricing" className={router.pathname == "/pricing" ? "nav-link active" : "nav-link"}>
                     Pricing
                     </Link>
                     </li>
                     <li className="nav-item"> 
                     <Link href="/blogs" className={router.pathname == "/blogs" ? "nav-link active" : "nav-link"}>
                     Blogs
                     </Link>
                     </li>
                     <li className="nav-item"> 
                     <Link href="/contact" className={router.pathname == "/contact" ? "nav-link talk-let active" : "nav-link talk-let"}>
                     Lets Talk
                     </Link>
                     </li>                     
                  </ul>
               </div>
            </div>
         </nav>
      </header>
  )
}

export default Navbar