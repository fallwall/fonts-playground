import React, { useState } from 'react';
import WebFont from 'webfontloader';
import { Typography, Slider } from '@material-ui/core';



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
    fontSize: props.fontSize,
    fontFamily: `${font}`
  }
  return (
    <div>
      {props.font && <div><h1>{props.font.family}</h1></div>}
      <Typography id="discrete-slider-always" gutterBottom>
        Font Size
      </Typography>
      <Slider
        defaultValue={props.fontSize}
        // getAriaValueText={valuetext}
        onChange={(e, val) => props.changeFontSize(val)}
        aria-labelledby="discrete-slider-always"
        min={20}
        max={200}
        step={10}
        // marks={marks}
        valueLabelDisplay="on"
      />
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
