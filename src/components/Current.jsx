import React from 'react';

const fontStyle = {
  color: 'blue',
  fontFamily: 'Lato',
  fontStyle: 'normal',
  fontWeight: 'normal',
  src: `url(http://fonts.gstatic.com/s/lato/v17/S6uyw4BMUTPHvxk6XweuBCY.ttf) format('truetype')`
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
