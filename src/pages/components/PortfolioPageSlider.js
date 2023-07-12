import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function PortfolioPageSlider(props) {
    var settings = {

      autoplay: false,
      autoplaySpeed: 1000,
      slidesToShow: 1,
      dots: true,
      arrows: true,
      responsive: [
     {
       breakpoint: 768,
       settings: {
       slidesToShow: 1,
       slidesToScroll: 1
       }
     }
    ]
      };
      return (
        <Slider {...settings} className="slick-slider2">
                {props.imgData && props.imgData.length > 0 && props.imgData.map((data, i)=>(
                  <div className="item" key={i}>
                     <figure><img src={data.image} alt={data.alt}/>
                     </figure>
                  </div>
                ))}
        </Slider>
      );
    }
