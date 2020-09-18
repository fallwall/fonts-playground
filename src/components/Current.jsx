import React, { useState } from 'react';
import WebFont from 'webfontloader';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Typography, Slider, TextField } from '@material-ui/core';



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
    <div className="content-current">
      {props.font && <div><h1>{props.font.family}</h1></div>}
      {props.font && <div><p><a href={props.font && props.font.files.regular}>download .ttf</a></p></div>}
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
      <form noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Type something here..."
          variant="outlined"
          fullWidth={true}
          placeholder="Roe is a cat..."
          onChange={e => setInput(e.target.value)}
        />
      </form>
      <div className="content-current-output">
        <p style={fontStyle}>{input}</p>
      </div>

      <SaveAltIcon fontSize="large" />
      <MailOutlineIcon fontSize="large" />
    </div>
  )
}
