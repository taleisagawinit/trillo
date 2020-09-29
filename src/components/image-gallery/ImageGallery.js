import React from 'react';
import Slider from "react-slick";
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
      

export default function(props) {
  const settings = {
    speed: 800,
    autoplay: false,
    autoplaySpeed: 2500,
    
    centerMode: true,
    // variableWidth: true
    // centerPadding: '50px'
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };
  return (
    // <div >
        <Slider {...settings}>   
          <img className="image-gallery__img" alt={props.alt1} src={props.img1}></img>
          <img className="image-gallery__img" alt={props.alt2} src={props.img2}></img>   
          <img className="image-gallery__img" alt={props.alt3} src={props.img3}></img>
        </Slider>
  )
}