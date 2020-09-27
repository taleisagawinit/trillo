import React from 'react';
import { IoIosStar, IoIosPin } from 'react-icons/io';


export default function(props) { 
  function getStarRating(num) {
    if (num) {
      let numArr = [...Array(num).keys()];
      let starArr = numArr.map(x => (
        <div className="info-title__star-box" key={x}>
          <IoIosStar className="info-title__star" />
        </div>
      ));
      return starArr
    }
  } 

  return (
    <section className="info-title">
      <div className="info-title__left">
        <div className="info-title__title-box">
          <h1 className="info-title__title">{props.title}</h1>
        </div>
        {/* star rating component */}
        <div className="info-title__star-rating">
          {getStarRating(props.starRating)}
        </div>
        {/* location component */}
        <div className="info-title__location-box"> 
          <div className="info-title__location-icon">
            <IoIosPin />
          </div>
          <p className="info-title__location-text">{props.location}</p>
        </div>
      </div>
      {/* number rating component */}
      <div className="info-title__number-rating-box">
          <h2 className="info-title__rating">{props.numRating}</h2>
          <h3 className="info-title__votes">({props.votes} votes)</h3>
      </div>
    </section>
  )
}