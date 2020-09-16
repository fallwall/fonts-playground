import React from 'react';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Ranchers', 'sans-serif']
  }
});

const fontStyle = {
  color: 'blue',
  fontFamily: 'Ranchers'
}


export default function Current(props) {
  return (
    <div>
      {props.font && <div><h1>{props.font.family}</h1></div>}
      {props.font && <div><p>{props.font.files.regular}</p></div>}
      <p style={fontStyle}>TYPED RESULT HERE</p>

    </div>
  )
}
