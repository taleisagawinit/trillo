import React from 'react';

export default function(props) {
  return (
    <div className="avatar-icon">
      <div className="avatar-icon__img-box">
        <img className="avatar-icon__img" src={props.img} alt={props.alt}></img>
      </div>
      <p className="avatar-icon__text">{props.name}</p>
    </div>
  )
}