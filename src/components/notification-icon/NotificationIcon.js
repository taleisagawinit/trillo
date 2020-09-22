import React from 'react';

export default function(props) {
  return (
    <div className="notification-icon">
      <div className="notification-icon__icon">{props.icon}</div>
      <div className="notification-icon__number-box">
        <p className="notification-icon__number">{props.number}</p>
      </div>
    </div>
  )
}