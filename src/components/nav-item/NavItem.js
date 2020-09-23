import React from 'react';

export default function(props) {
  return (
    <div className="nav-item">
      <div className="nav-item__icon">{props.icon}</div>
      <p className="nav-item__text">{props.name}</p>
    </div>
  )
}