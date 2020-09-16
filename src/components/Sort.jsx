import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
// import { RestoreIcon } from '@material-ui/lab';

export default function Sort(props) {
  const [value, setValue] = useState(0);
  return (
    <div className="top">
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          props.changeSorting(newValue)
        }}
        showLabels
      // className={classes.root}
      >
        <BottomNavigationAction label="Alphabetical" />
        <BottomNavigationAction label="Popularity" />
        <BottomNavigationAction label="Dates" />
      </BottomNavigation>
    </div>
  )
}

