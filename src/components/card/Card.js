import React from 'react';
import AvatarIcon from '../avatar-icon/AvatarIcon';

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
      <div className="card__recommend-box">
        <p className="card__users-info">Lucy and 3 other friends recommend this hotel</p>
        <div className="card__users">
            <AvatarIcon className="card__user" img={"/img/user-3.jpg"} alt={"user img"} />
            <AvatarIcon className="card__user" img={"/img/user-4.jpg"} alt={"user img"} />
            <AvatarIcon className="card__user" img={"/img/user-5.jpg"} alt={"user img"} />
            <AvatarIcon className="card__user" img={"/img/user-6.jpg"} alt={"user img"} />
        </div>
      </div>
    </div>
  )
}