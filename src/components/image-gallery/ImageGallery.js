import React from 'react';
import Slider from "react-slick";
      

export default function(props) {
  const settings = {
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    // centerPadding: '50px'
  };
  return (
    // <div >
      <Slider className="image-gallery" {...settings}>
        <div>
          <img className="image-gallery__img" alt={props.alt1} src={props.img1}></img>
        </div>
        <div>
          <img className="image-gallery__img" alt={props.alt2} src={props.img2}></img>
        </div>
        <div>
          <img className="image-gallery__img" alt={props.alt3} src={props.img3}></img>
        </div>
      </Slider>
  )
}