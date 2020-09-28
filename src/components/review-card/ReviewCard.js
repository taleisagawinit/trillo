import React from 'react';

export default function(props) {
  return (
    <figure className="review">
      <blockquote className="review__quote">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vero laborum excepturi id</blockquote>
      <figcaption className="review__user-info">
        <img className="review__user-pic" src="/img/user-1.jpg" alt="user review img"></img>
        <div>
          <p className="review__user-name">Nick Smith</p>
          <p className="review__user-date">Feb 23, 2017</p>
        </div>
        <div>
          <p className="review__user-rating">7.8</p>
        </div>
      </figcaption>
    </figure>
  )
}