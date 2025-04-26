import axios from 'axios';

export const handler = async function (event) {
  const API_KEY = process.env.VITE_API_KEY;
  const API_SECRET = process.env.VITE_API_SECRET;

  const authHeader = 'Basic ' + Buffer.from(`${API_KEY}:${API_SECRET}`).toString('base64');

  try {
    const body = JSON.parse(event.body);

    const response = await axios.post(
      'https://api.astronomyapi.com/api/v2/studio/star-chart',
      body,
      {
        headers: {
          Authorization: authHeader,
          'Content-Type': 'application/json',
        },
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
