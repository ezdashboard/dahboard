import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
// import axios from 'axios'
import Image from 'next/image'

 const PortfolioSlider =(props)=> {
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

      return (
        <Slider {...settings} className="slick-slider">
          {props.imgData && props.imgData.length > 0 && props.imgData.map((data, i) => (
                 <div className="item" key={i}>
                    <figure><img src={data.image}  alt={data.alt} />
                    </figure>
                 </div>
                ))}
        </Slider>
      );
    }
export default PortfolioSlider;
