import axios from 'axios';


export async function getPositions({ latitude, longitude, from_date, to_date, elevation, time }) {
  const response = await axios.get('/.netlify/functions/positions', {
    params: {
      latitude,
      longitude,
      from_date,
      to_date,
      elevation,
      time
    }
  });

  return response.data;
}
