import React from 'react';

export default function(props) {
  return (
    <div className="card">
      <div className="card__info-box">
        <p className="card__info card__info--1">{props.info1}</p>
        <p className="card__info card__info--2">{props.info2}</p>
      </div>
      <div className="card__perks-box">
        <ul className="card__perks">
          { props.perks ? props.perks.map((perk, i) => (
            <li key={i} className="card__perk">{perk}</li>
          )) : null }
        </ul>
      </div>
      <div className="card__reccommend">

      </div>
    </div>
  )
}