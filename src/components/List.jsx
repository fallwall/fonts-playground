import React from 'react';

export default function List(props) {
  return (
    <div className="content-list">
      {props.fonts.map((e, i) => <div
        key={i}
        onClick={()=>props.changeCurrentFont(i)}
      >
        {e.family}
      </div>)}
    </div>
  )
}
