import React from 'react';
import SortIcon from '@material-ui/icons/Sort';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// export const getAllFonts = async (order) => {
//   const orderConvert = (order) => ({
//     0 : "ALPHA",
//     1 : "POPULARITY",
//     2 : "DATE",
//   })[order];
//   const sorting = order > 0 ? `&sort=${orderConvert(order)}` : ``;
//   const resp = await axios.get(`${API_URL}${sorting}`);
//   return resp.data.items;
// }
export default function List(props) {
  return (
    <div className="content-list">
      <div className="content-list-top">
        <SortIcon fontSize="large" />
        <FormControl
          variant="outlined"
        // className={classes.formControl}
        >
          <InputLabel id="demo-simple-select-outlined-label">Sort</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            // value={age}
            onChange={e => props.changeSorting(e.target.value)}
            label="Age"
          >

            <MenuItem value={0}>
              <em>Alphabetical(default)</em>
            </MenuItem>
            <MenuItem value={1}>Popularity</MenuItem>
            <MenuItem value={2}>Dates</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="content-list-bottom">
        {props.fonts.map((e, i) => <div
          key={i}
          onClick={() => props.changeCurrentFont(i)}
        >
          <p className={props.currentFont == i? "content-list-bottom-current":""}><span>{e.family}</span></p>
        </div>)}
      </div>
    </div>
  )
}
