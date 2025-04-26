import axios from 'axios';

export const getStarChart = async (body) => {
    const response = await axios.post('/.netlify/functions/starChart', body, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
}
  