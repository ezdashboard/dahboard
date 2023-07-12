import React, {useState, useEffect} from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import PortfolioSlider from './PortfolioSlider'
import PriceChart from './PriceChart'
import axios from 'axios';
import Faq from './Faq'
import FooterForm from './FooterForm';
const Pricing = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imgData, setImgData] = useState([]);
  var settings = {
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
  const [faqData, setFaqData] = useState([]);
  const [priceData, setPriceData] = useState([]);
  const fetchData = async () => {

     axios.get(`https://smca.ezrankings.in/react-backend/pricing.php`)
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
   // console.log("vikas",imgData);

           const pData = res.data.price.map((item) => {
             return {
               // id: item.id,
               title: item.title,
               id: item.id,
               colored: item.colored,
               start_up: item.start_up,
               business: item.business,
               individual: item.individual
             }
         }
       )
       setFaqData(faqqData);
       setImgData(data);
       setPriceData(pData);
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

    {/* <PriceChart chartData={priceData}/> */}
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
                            {priceData && priceData.length > 0 && priceData.map((data,p)=>(
                              <tr key={p}>
                                <td>{data.title}</td>
                                <td className={data.colored=="1" ? "fs":""}>{data.individual}</td>
                                <td className={data.colored=="1" ? "fs":""}>{data.start_up}</td>
                                <td className={data.colored=="1" ? "fs":""}>{data.business}</td>
                              </tr>
                            ))}
                      </tbody>
                    </table>
              </div>
          </div>
      </div>
  </section>
    {/* <Faq faqData={faqData} /> */}
    <section className="faq-section">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h2 className="faq-title">Frequently Asked Questions (FAQs)</h2>
                  <div className="accordion" id="accordionExample" itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question">
                    {faqData && faqData.length > 0 && faqData.map((data, i)=>(
                        <div className="accordion-item" key={i}>
                        <h2 className="accordion-header" id={'headingOne'+i} itemprop={data.title}>
                            <button className={hiddenTitleIndex === i ? 'accordion-button collapsed openDesc' : 'accordion-button collapsed'} type="button" data-bs-toggle={'collapseOne'+i} data-bs-target={'#collapseOne'+i}  aria-controls={'collapseOne'+i}  onClick={() => toggleHiddenTitle(i)}>
                            {data.status}Q.{i+1} {data.title}
                            </button>
                        </h2>
                        <div id={'collapseOne'+i} aria-labelledby={'headingOne'+i} data-bs-parent="#accordionExample" itemscope="" itemprop={data.description} itemtype="https://schema.org/Answer">
                            <div className={hiddenTitleIndex === i ? 'accordion-body' :''}>
                            {hiddenTitleIndex === i && <p dangerouslySetInnerHTML={{ __html: data.description}} />}
                            </div>
                        </div>
                    </div>
                    ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
    {/* <PortfolioSlider imgData={imgData}/> */}
    <Slider {...settings} className="slick-slider">
          {imgData && imgData.length > 0 && imgData.map((data, i) => (
                 <div className="item" key={i}>
                    <figure><img src={data.image}  alt={data.alt} />
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
    <FooterForm />
    </>
  )
}

export default Pricing
