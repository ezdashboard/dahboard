import React, {useState, useEffect} from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import FooterForm from './components/FooterForm'
import Head from 'next/head'
import Link from 'next/link'

export default function MyPage({ data }) {
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('startup');
  const [activeMainTab, setMainActiveTab] = useState('creativesPlan');

  const [isPlan,updatePlan]=useState('creativesPlan');
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
                  <h1 ><span >PRICING</span></h1>
               </div>
            </div>
         </div>
      </div>
     </section>

    
    <section className="pricing-sec">
        <div className="container">
         <div className="row">
            <div className="col-md-12 text-center">
               <div className="pricing-tab">
                  <button className={isPlan== 'creativesPlan' ? 'tablinks active' :'tablinks'} onClick={()=>updatePlan('creativesPlan')}>Creatives Plan</button>
                  <button className={isPlan== 'paidPlan' ? 'tablinks active' :'tablinks'} onClick={()=>updatePlan('paidPlan')}>Paid Plan</button>
                  <button className={isPlan== 'engagementPlan' ? 'tablinks active' :'tablinks'} onClick={()=>updatePlan('engagementPlan')}>Engagement Plan</button>
                </div>
            </div>
         </div>
         <div className={'row tabcontent'} id="CreativesPlan" style={{display: isPlan== 'creativesPlan' ? 'block' :'none' }}>
               
                <div className="col-md-12 entry-content table-responsive" >
                    <table className="table">
                      
                        <tbody>
                            <tr>
                                <td></td>
                                <td className="redC"><span>Start-up</span></td>
                                <td className="redC"><span>Economic</span></td>
                                <td className="redC"><span>Business</span></td>
                              </tr>
                             
                              {data.price && data.price.length > 0 && data.price.map((pdata,p)=>(
                              <tr key={p}>
                                <td>{pdata.title}</td>
                                <td  className={p ==0 ? 'fs':''} dangerouslySetInnerHTML={{ __html: pdata.individual}} />
                                <td  className={p ==0 ? 'fs':''} dangerouslySetInnerHTML={{ __html: pdata.start_up}} />
                                <td  className={p ==0 ? 'fs':''} dangerouslySetInnerHTML={{ __html: pdata.business}} />
                              </tr>
                            ))}

                        </tbody>
                      </table>
                </div>
            </div>

            <div className="row tabcontent" id="PaidPlan" style={{display: isPlan== 'paidPlan' ? 'block' :'none' }}>
               
               <div className="col-md-12 entry-content table-responsive" >
                   <table className="table">
                     
                       <tbody>
                             {data.pricePaid && data.pricePaid.length > 0 && data.pricePaid.map((pdData,p1)=>(
                              <tr key={p1}>
                                <td>{pdData.title}</td>
                              {  pdData.individual && <td  className={p1 ==0 ? 'redC':'' || p1 == 1 ? 'fs':''} dangerouslySetInnerHTML={{ __html: pdData.individual}} />
                              } 
                              {  pdData.start_up && <td  className={p1 ==0 ? 'redC':'' || p1 == 1 ? 'fs':''} dangerouslySetInnerHTML={{ __html: pdData.start_up}} />
                              } 
                              {  pdData.business && <td  className={p1 ==0 ? 'redC':'' || p1 == 1 ? 'fs':''} dangerouslySetInnerHTML={{ __html: pdData.business}} />
                              } 
                
                              </tr>
                            ))}
                         
                       </tbody>
                     </table>
               </div>
           </div>


           <div className="row tabcontent" id="EngagementPlan" style={{display: isPlan== 'engagementPlan' ? 'block' :'none' }}>
               
            <div className="col-md-12 entry-content table-responsive" >
                <table className="table">
                    <tbody>
                        <tr>
                            <td className="redC" colSpan={4}><span><strong>SOCIAL MEDIA ENGAGEMENT PLAN</strong></span></td>
                          </tr>

                            {data.priceEng && data.priceEng.length > 0 && data.priceEng.map((pdata,p2)=>(
                              <tr key={p2}>
                                 
                              {pdata.id && pdata.id =='19' && <td className="br-right"style={{textAlign:'center'}} colSpan={5}><span><strong>{pdata.title}</strong></span></td>}
                             
                              {pdata.id && pdata.id !='19' && <td>{pdata.title}</td>}

                              {pdata.start_up && <td  className={p2 ==0 ? 'fs':''} dangerouslySetInnerHTML={{ __html: pdata.individual}} />}
                             
                              {pdata.start_up  && <td  className={p2 ==0 ? 'fs':''} dangerouslySetInnerHTML={{ __html: pdata.start_up}} />}

                              {pdata.business && <td  className={p2 ==0 ? 'fs':''} dangerouslySetInnerHTML={{ __html: pdata.business}} />}

                              </tr>
                            ))}
                      
                    </tbody>
                  </table>
            </div>
        </div>
        </div>
    </section>
     


     {/* <section className="pricing-sec">
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
  </section> */}

  <div className="for-mobile-table">
<div className="pricing-table-mobile pricing-table-mobile-tab  mr-bt-20" bis_skin_checked="1">{}
   <div className="container" bis_skin_checked="1">
      <div className="row" bis_skin_checked="1">
         <div className="col-md-12" bis_skin_checked="1">
            <ul className="nav nav-tabs" role="tablist">
               <li className="nav-item" role="presentation" onClick={()=>setMainActiveTab('creativesPlan')}><a className={activeMainTab=='creativesPlan'? 'nav-link active':'nav-link'} data-bs-toggle="tab" aria-selected="true" role="tab">Creatives </a></li>
               <li className="nav-item" role="presentation"onClick={()=>setMainActiveTab('paidPlan')}><a className={activeMainTab=='paidPlan'? 'nav-link active':'nav-link'} data-bs-toggle="tab" aria-selected="false" role="tab" tabIndex="-1">Paid</a></li>
               <li className="nav-item" role="presentation"onClick={()=>setMainActiveTab('engagementPlan')}><a className={activeMainTab=='engagementPlan'? 'nav-link active':'nav-link'} data-bs-toggle="tab" aria-selected="false" role="tab" tabIndex="-1">Engagement</a></li>
            </ul>
         </div>
      </div>
   </div>
</div>

<div className={activeMainTab=='creativesPlan'? 'pricing-table-mobile show':'pricing-table-mobile hide'} bis_skin_checked="1">
   <div className="container" bis_skin_checked="1">
      <div className="row" bis_skin_checked="1">
         <div className="col-md-12" bis_skin_checked="1">
         <ul className="nav nav-tabs" role="tablist">
               <li className="nav-item" role="presentation" onClick={() => setActiveTab("startup")}>
               <a className={activeTab =='startup' ? 'nav-link active' : 'nav-link'} data-bs-toggle="tab" aria-selected="true" role="tab">Start-Up</a>
               </li>
               <li className="nav-item" role="presentation" onClick={() => setActiveTab("economic")}>
               <a className={activeTab =='economic' ? 'nav-link active' : 'nav-link'} data-bs-toggle="tab" aria-selected="false" role="tab" tabIndex="-1">Economic</a>
               </li>
               <li className="nav-item" role="presentation" onClick={() => setActiveTab("business")}>
               <a className={activeTab =='business' ? 'nav-link active' : 'nav-link'} data-bs-toggle="tab"  aria-selected="false" role="tab" tabIndex="-1">Business</a>
               </li>
            </ul>
            <div className="tab-content" bis_skin_checked="1">
            <div className={activeTab =='startup' ? 'tab-pane container active show' : 'tab-pane container fade'} id="Start-Up" bis_skin_checked="1" role="tabpanel">
               <table className="table">
                  <tbody>
                  {data.price && data.price.length > 0 && data.price.map((pdata,p)=>(
                              <tr key={p}>
                              <td>{pdata.title}</td>
                              {<td  className={p ==0 ? 'fs':''} dangerouslySetInnerHTML={{ __html: pdata.individual}} />}
                              {/* <td className={pdata.colored=="1" ? "fs2":""}>{pdata.individual}</td> */}
                              </tr>
                           ))}
                  </tbody>
               </table>
            </div>
            <div className={activeTab =='economic' ? 'tab-pane container active show' : 'tab-pane container fade'} id="Economic" bis_skin_checked="1" role="tabpanel">
                  <table className="table">
                     <tbody>
                        
                     {data.price && data.price.length > 0 && data.price.map((pdata,p)=>(
                                 <tr key={p}>
                                 <td>{pdata.title}</td>
                                 {/* <td className={pdata.colored=="1" ? "fs":""}>{pdata.start_up}</td> */}
                                 {<td  className={p ==0 ? 'fs':''} dangerouslySetInnerHTML={{ __html: pdata.start_up}} />}

                                 </tr>
                              ))}
                     </tbody>
                  </table>
               </div>
               <div className={activeTab =='business' ? 'tab-pane container active show' : 'tab-pane container fade'} id="Business" bis_skin_checked="1" role="tabpanel">
                  <table className="table">
                     <tbody>
                        
                     {data.price && data.price.length > 0 && data.price.map((pdata,p)=>(
                                 <tr key={p}>
                                 <td>{pdata.title}</td>
                                 {/* <td className={pdata.colored=="1" ? "fs":""}>{pdata.business}</td> */}
                                 {<td  className={p ==0 ? 'fs':''} dangerouslySetInnerHTML={{ __html: pdata.business}} />}

                                 </tr>
                              ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>

<div className={activeMainTab=='paidPlan'? 'pricing-table-mobile show':'pricing-table-mobile hide'} bis_skin_checked="1">
   <div className="container" bis_skin_checked="1">
      <div className="row" bis_skin_checked="1">
      <div className="col-md-12" bis_skin_checked="1">
         <ul className="nav nav-tabs" role="tablist">
               <li className="nav-item" role="presentation" onClick={() => setActiveTab("startup")}>
               <a className={activeTab =='startup' ? 'nav-link active' : 'nav-link'} data-bs-toggle="tab" aria-selected="true" role="tab">Option 1</a>
               </li>
               <li className="nav-item" role="presentation" onClick={() => setActiveTab("economic")}>
               <a className={activeTab =='economic' ? 'nav-link active' : 'nav-link'} data-bs-toggle="tab" aria-selected="false" role="tab" tabIndex="-1">Option 2</a>
               </li>
               <li className="nav-item" role="presentation" onClick={() => setActiveTab("business")}>
               <a className={activeTab =='business' ? 'nav-link active' : 'nav-link'} data-bs-toggle="tab"  aria-selected="false" role="tab" tabIndex="-1">Option 3</a>
               </li>
            </ul>
            <div className="tab-content" bis_skin_checked="1">
            <div className={activeTab =='startup' ? 'tab-pane container active show' : 'tab-pane container fade'} id="Start-Up" bis_skin_checked="1" role="tabpanel">
               <table className="table">
                  <tbody>
                  {data.pricePaid && data.pricePaid.length > 0 && data.pricePaid.map((pdata,p)=>(
                              <tr key={p}>
                              <td>{pdata.title}</td>
                              {/* <td className={pdata.colored=="1" ? "fs2":""}>{pdata.individual}</td> */}
                              {<td  className={p ==0 ? 'fs':''} dangerouslySetInnerHTML={{ __html: pdata.individual}} />}

                              </tr>
                           ))}
                  </tbody>
               </table>
            </div>
            <div className={activeTab =='economic' ? 'tab-pane container active show' : 'tab-pane container fade'} id="Economic" bis_skin_checked="1" role="tabpanel">
                  <table className="table">
                     <tbody>
                        
                     {data.pricePaid && data.pricePaid.length > 0 && data.pricePaid.map((pdata,p)=>(
                                 <tr key={p}>
                                 <td>{pdata.title}</td>
                                 {/* <td className={pdata.colored=="1" ? "fs":""}>{pdata.start_up}</td> */}
                                 {<td  className={p ==0 ? 'fs':''} dangerouslySetInnerHTML={{ __html: pdata.start_up}} />}

                                 </tr>
                              ))}
                     </tbody>
                  </table>
               </div>
               <div className={activeTab =='business' ? 'tab-pane container active show' : 'tab-pane container fade'} id="Business" bis_skin_checked="1" role="tabpanel">
                  <table className="table">
                     <tbody>
                        
                     {data.pricePaid && data.pricePaid.length > 0 && data.pricePaid.map((pdata,p)=>(
                                 <tr key={p}>
                                 <td>{pdata.title}</td>
                                 {/* <td className={pdata.colored=="1" ? "fs":""}>{pdata.business}</td> */}
                                 {<td  className={p ==0 ? 'fs':''} dangerouslySetInnerHTML={{ __html: pdata.business}} />}

                                 </tr>
                              ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>


<div className={activeMainTab=='engagementPlan'? 'pricing-table-mobile show':'pricing-table-mobile hide'} bis_skin_checked="1">
   <div className="container" bis_skin_checked="1">
      <div className="row" bis_skin_checked="1">
      <div className="col-md-12" bis_skin_checked="1">
         <ul className="nav nav-tabs" role="tablist">
               <li className="nav-item" role="presentation" onClick={() => setActiveTab("startup")}>
               <a className={activeTab =='startup' ? 'nav-link active' : 'nav-link'} data-bs-toggle="tab" aria-selected="true" role="tab">Option 1</a>
               </li>
               <li className="nav-item" role="presentation" onClick={() => setActiveTab("economic")}>
               <a className={activeTab =='economic' ? 'nav-link active' : 'nav-link'} data-bs-toggle="tab" aria-selected="false" role="tab" tabIndex="-1">Option 2</a>
               </li>
               <li className="nav-item" role="presentation" onClick={() => setActiveTab("business")}>
               <a className={activeTab =='business' ? 'nav-link active' : 'nav-link'} data-bs-toggle="tab"  aria-selected="false" role="tab" tabIndex="-1">Option 3</a>
               </li>
            </ul>
            <div className="tab-content" bis_skin_checked="1">
            <div className={activeTab =='startup' ? 'tab-pane container active show' : 'tab-pane container fade'} id="Start-Up" bis_skin_checked="1" role="tabpanel">
               <table className="table">
                  <tbody>
                  {data.priceEng && data.priceEng.length > 0 && data.priceEng.map((pdata,p)=>(
                              <tr key={p}>
                              <td>{pdata.title}</td>
                                 {pdata.individual && <td  className={p ==0 ? 'fs':''} dangerouslySetInnerHTML={{ __html: pdata.individual}} />}
                              </tr>
                           ))}
                  </tbody>
               </table>
            </div>
            <div className={activeTab =='economic' ? 'tab-pane container active show' : 'tab-pane container fade'} id="Economic" bis_skin_checked="1" role="tabpanel">
                  <table className="table">
                     <tbody>
                        
                     {data.priceEng && data.priceEng.length > 0 && data.priceEng.map((pdata,p)=>(
                                 <tr key={p}>
                                 <td>{pdata.title}</td>
                                  {pdata.start_up && <td  className={p ==0 ? 'fs':''} dangerouslySetInnerHTML={{ __html: pdata.start_up}} />}
                                 </tr>
                              ))}
                     </tbody>
                  </table>
               </div>
               <div className={activeTab =='business' ? 'tab-pane container active show' : 'tab-pane container fade'} id="Business" bis_skin_checked="1" role="tabpanel">
                  <table className="table">
                     <tbody>
                        
                     {data.priceEng && data.priceEng.length > 0 && data.priceEng.map((pdata,p)=>
                     
                     ( 
                                 <tr key={p}>
                                 <td>{pdata.title}</td>
                                 {pdata.business && <td  className={p ==0 ? 'fs':''} dangerouslySetInnerHTML={{ __html: pdata.business}} />}
                                 </tr>
                              ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>

</div>



{/* 
  <div className="pricing-table-mobile " bis_skin_checked="1">
   <div className="container" bis_skin_checked="1">
      <div className="row" bis_skin_checked="1">
         <div className="col-md-12" bis_skin_checked="1">
            <ul className="nav nav-tabs" role="tablist">
               <li className="nav-item" role="presentation" onClick={() => setActiveTab("startup")}>
               <a className={activeTab =='startup' ? 'nav-link active' : 'nav-link'} data-bs-toggle="tab" aria-selected="true" role="tab">Start-Up</a>
               </li>
               <li className="nav-item" role="presentation" onClick={() => setActiveTab("economic")}>
               <a className={activeTab =='economic' ? 'nav-link active' : 'nav-link'} data-bs-toggle="tab" aria-selected="false" role="tab" tabIndex="-1">Economic</a>
               </li>
               <li className="nav-item" role="presentation" onClick={() => setActiveTab("business")}>
               <a className={activeTab =='business' ? 'nav-link active' : 'nav-link'} data-bs-toggle="tab"  aria-selected="false" role="tab" tabIndex="-1">Business</a>
               </li>
            </ul>
            <div className="tab-content" bis_skin_checked="1">
               <div className={activeTab =='startup' ? 'tab-pane container active show' : 'tab-pane container fade'} id="Start-Up" bis_skin_checked="1" role="tabpanel">
                  <table className="table">
                     <tbody>
                     {data.price && data.price.length > 0 && data.price.map((pdata,p)=>(
                                 <tr key={p}>
                                 <td>{pdata.title}</td>
                                 <td className={pdata.colored=="1" ? "fs2":""}>{pdata.individual}</td>
                                 </tr>
                              ))}
                     </tbody>
                  </table>
               </div>
               <div className={activeTab =='economic' ? 'tab-pane container active show' : 'tab-pane container fade'} id="Economic" bis_skin_checked="1" role="tabpanel">
                  <table className="table">
                     <tbody>
                        
                     {data.price && data.price.length > 0 && data.price.map((pdata,p)=>(
                                 <tr key={p}>
                                 <td>{pdata.title}</td>
                                 <td className={pdata.colored=="1" ? "fs":""}>{pdata.start_up}</td>
                                 </tr>
                              ))}
                     </tbody>
                  </table>
               </div>
               <div className={activeTab =='business' ? 'tab-pane container active show' : 'tab-pane container fade'} id="Business" bis_skin_checked="1" role="tabpanel">
                  <table className="table">
                     <tbody>
                        
                     {data.price && data.price.length > 0 && data.price.map((pdata,p)=>(
                                 <tr key={p}>
                                 <td>{pdata.title}</td>
                                 <td className={pdata.colored=="1" ? "fs":""}>{pdata.business}</td>
                                 </tr>
                              ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   </div>
  </div> */}

      <section className="faq-section">
               <div className="container">
                  <div className="row">
                     <div className="col-md-12">
                        <h2 className="faq-title">Frequently Asked Questions (FAQs)</h2>
                        <div className="accordion" id="accordionExample" itemScope="" itemProp="mainEntity" itemType="https://schema.org/Question">
                        {data.faq && data.faq.length > 0 && data.faq.map((dataF, i)=>(
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

      <section className="sliderForPricing">
        <div className="row">
            <div className="col-md-12">
               <h2 className="sliderTitle">Our Work</h2>
               <Slider {...settings} className="slick-slider">
                  {data.gallery && data.gallery.length > 0 && data.gallery.map((galData, i) => (
                        <div className="item" key={i}>
                           <figure><img src={galData.img}  alt={galData.alt} />
                           </figure>
                        </div>
                        ))}
               </Slider>
            </div>
         </div>
        </section>
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
                     <Link href="/contact" className="">Get Started</Link>
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
