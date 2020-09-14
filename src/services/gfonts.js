import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}`;

export const getFonts = async() => {
  const resp = await axios.get(`${API_URL}`);
  return resp.data;
}