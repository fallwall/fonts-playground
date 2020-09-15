import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
// import { RestoreIcon } from '@material-ui/lab';

export default function Sort() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
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

