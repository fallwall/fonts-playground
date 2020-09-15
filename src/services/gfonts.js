import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}`;

export const getAllFonts = async (order) => {
  const sorting = order > 0 ? `&sort=${order}` : ``;
  // DATE, ALPHA, POPULARITY
  const resp = await axios.get(`${API_URL}${sorting}`);
  return resp.data.items;
}