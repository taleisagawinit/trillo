import React from 'react';

export default function(props) {
  return (
    <figure className="review">
      <blockquote className="review__quote">{props.quote}</blockquote>
      <figcaption className="review__user">
        <img className="review__user__pic" src={"/img/" + props.img} alt="user review img"></img>
        <div>
          <p className="review__user__name">{props.name}</p>
          <p className="review__user__date">{props.date}</p>
        </div>
        <div className="review__user__rating">
          <p>{props.rating}</p>
        </div>
      </figcaption>
    </figure>
  )
}