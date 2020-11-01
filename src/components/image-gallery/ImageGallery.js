import React from 'react';
      

export default function(props) {
  return (
        <div className="image-gallery">   
          <img className="image-gallery__img" alt={props.alt1} src={props.img1}></img>
          <img className="image-gallery__img" alt={props.alt2} src={props.img2}></img>   
          <img className="image-gallery__img" alt={props.alt3} src={props.img3}></img>
        </div>
  )
}