import React, {useState, useEffect} from 'react'
import PortfolioPageSlider from './PortfolioPageSlider'
import axios from 'axios';
import Image from 'next/image'
import FooterForm from './FooterForm';
import Faq from './Faq.js'

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imgPortData, setImgPortData] = useState([]);
  const [faqData, setFaqData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [imgPortBlogData, setImgPortBlogData] = useState([]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  }
  const fetchData = async (page) => {

     axios.get(`https://smca.ezrankings.in/react-backend/portData.php?page=${page}`)
       .then(res => {
           const data = res.data.gallery && res.data.gallery.length > 0 && res.data.gallery.map((item) => {
             return {
               id: item.id,
               alt: item.alt,
               image: item.image
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
           const blogData = res.data.blog.map((item) => {
             return {
               id: item.id,
               alt: item.alt,
               image: item.image
             }
         }
       )
       if(faqqData && faqqData.length > 0){
        setImgPortData(data);

       }
       setFaqData(faqqData);
       // setImgPortBlogData([...imgPortBlogData, blogData]);
       if(imgPortBlogData && imgPortBlogData.length > 0){
         let newArrayBlog = imgPortBlogData;
         for(let z=0; z < blogData.length; z++){
           newArrayBlog.push(blogData[z]);
         }
         setImgPortBlogData(newArrayBlog);
         // setImgPortBlogData([...imgPortBlogData, blogData]);

       }else{
         setImgPortBlogData(blogData);
       }
     })
     .catch(err => {
      })
  }
  useEffect(() => {
    fetchData(currentPage);
}, [currentPage])

  return (
   <>

   <section className="banner-section portfoliopage">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="banner-caption">
                     <h1 ><span >PORTF<img src={"https://smca.ezrankings.in/react-backend/uploads/oshap.png"} className="o-shap" alt=""/>Lio</span></h1>
                     {/* <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,</p> */}
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="porfolio-slider">
    <div className="container">
        <div className="row">
            <div className="col-md-9 mx-auto">
                <div className="slider-porfolio">
                   <PortfolioPageSlider  imgData={imgPortData}/>
            </div>
        </div>
    </div></div>
</section>

<section className="portfolio-sec">
  <div className="container">
      <div className="row">
      {imgPortBlogData.map((blogImg, b) =>(
        <div className="col-md-4" key={b}>
            <div className="portfolio-card">
                <figure> <a href={blogImg.image} data-fancybox="gallery" data-caption={blogImg.alt}>
                    <img src={blogImg.image} alt={blogImg.alt} />
                    <span className="zoom-img"><i className="fas fa-search-plus"></i></span>
                  </a>
                </figure>
            </div>
        </div>
      ))}
        <div className="col-md-12">
            <div className="load-more-btn">
                <a onClick={handleNextPage}>Load More</a>
            </div>
        </div>
      </div>
  </div>
</section>
<section className="start-retainership-sec ">
  <div className="continer">
    <div className="row">
      <div className="col-md-12">
        <div className="content-wrap">
          <p>We believe that every business 
          is <span>unique and deserves excellent and customized 
          social media creatives,</span> that's why we take the time to 
          develop an enduring connection with our clients.
          </p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="content-wrap2">
          <h2>Let’s create something 
          amazing together.
          </h2>
          <a href="https://www.socialmediacreativeagency.com/contact-us" class="">Get Started</a>
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

export default Portfolio
