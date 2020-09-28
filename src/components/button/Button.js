import React from 'react';

export default function(props) {
  if (props.type === 'inline') {
    return (
      <button className="button button__inline">
        {props.text}
      </button>
    )
  }
  if (props.type === 'gradient') {
    return (
      <button className="button button__gradient">
        {props.text}
      </button>
    )
  }
}