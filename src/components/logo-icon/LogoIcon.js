import React from 'react';

export default function(props) {
  return (
    <div className="logo-icon">
      <img className="logo-icon__img" src={props.img} alt={props.alt}></img>
    </div>
  )
}