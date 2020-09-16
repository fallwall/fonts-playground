import React, { useState } from 'react';
import WebFont from 'webfontloader';




export default function Current(props) {
  const [input, setInput] = useState("");
  const font = props.font && props.font.family;

  WebFont.load({
    google: {
      families: [`${font}`, 'sans-serif']
    }
  });
  
  const fontStyle = {
    color: 'blue',
    fontFamily: `${font}`
  }
  return (
    <div>
      {props.font && <div><h1>{props.font.family}</h1></div>}
      <input
        type="text"
        placeholder="Roe is a cat..."
        onChange={e => setInput(e.target.value)}
      />
      {props.font && <div><p>{props.font.files.regular}</p></div>}
      <p style={fontStyle}>TYPED RESULT HERE</p>
      <p style={fontStyle}>{input}</p>

    </div>
  )
}
