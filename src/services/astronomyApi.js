import axios from 'axios';


const API_KEY = import.meta.env.VITE_API_KEY;
const API_SECRET = import.meta.env.VITE_API_SECRET;

const authHeader = 'Basic ' + btoa(`${API_KEY}:${API_SECRET}`);

const astronomyAPI = axios.create({
  baseURL: 'https://api.astronomyapi.com/api/v2/bodies/positions',
  headers: {
    'Authorization': authHeader
  }
});

export default astronomyAPI;
