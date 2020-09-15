import React from 'react';

export default function Current(props) {
  return (
    <div>
      {props.font && <div><h1>{props.font.family}</h1></div>}
    </div>
  )
}
