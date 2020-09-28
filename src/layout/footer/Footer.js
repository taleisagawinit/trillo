import React from 'react';
import Button from '../../components/button/Button';

export default function(props) {
  return (
    <footer className="footer">
      <h3 className="footer__heading">{props.heading}</h3>
      <Button
      type={"gradient"}
      text={"book now"}
      />
    </footer>
  )
}