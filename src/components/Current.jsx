import React, { useState } from 'react';
import WebFont from 'webfontloader';
import GetAppIcon from '@material-ui/icons/GetApp';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import FormatSizeIcon from '@material-ui/icons/FormatSize';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import { Slider, TextField } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const muiTheme = createMuiTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        color: '#0E79B2',
      },
      track: {
        color: '#71B8DE'
      },
      rail: {
        color: '#191923'
      }
    }
  }
});

export default function Current(props) {
  const [input, setInput] = useState("");
  const [align, setAlign] = useState("justify");
  const font = props.font && props.font.family;

  WebFont.load({
    google: {
      families: [`${font}`, 'sans-serif']
    }
  });

  const fontStyle = {
    color: '#0E79B2',
    fontSize: props.fontSize,
    fontFamily: `${font}`,
    textAlign: `${align}`
  }
  return (
    <div className="content-current">
      {props.font && <div><h1>{props.font.family}</h1></div>}
      <div className="content-current-icons">
        <a
          href={props.font && props.font.files.regular}
          title="Download TTF file"
          alt="Download TTF file">
          <GetAppIcon fontSize="large" />
        </a>
        <FormatAlignCenterIcon onClick={() => setAlign("center")} fontSize="large" />
        <FormatAlignJustifyIcon onClick={() => setAlign("justify")} fontSize="large" />
        <FormatAlignLeftIcon onClick={() => setAlign("left")} fontSize="large" />
        <FormatAlignRightIcon onClick={() => setAlign("right")} fontSize="large" />
        <FormatSizeIcon fontSize="large" />
        <ThemeProvider theme={muiTheme}>
          <Slider
            defaultValue={props.fontSize}
            onChange={(e, val) => props.changeFontSize(val)}
            aria-labelledby="discrete-slider-always"
            min={20}
            max={200}
            step={10}
            valueLabelDisplay="on"
            className="Slider"
          />
        </ThemeProvider>
      </div>
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
      <div className="content-current-icons2">
        {/* <SaveAltIcon fontSize="large" /> */}
        <a
          href="mailto:sherunsfreely@gmail.com"
          title="Have feedback?">
          <MailOutlineIcon fontSize="large" />
        </a>
      </div>
    </div>
  )
}
