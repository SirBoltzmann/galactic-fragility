import axios from 'axios';


exports.handler = async function (event) {
    const { latitude, longitude, from_date, to_date, elevation, time } = event.queryStringParameters;

    const API_KEY = process.env.VITE_API_KEY;
    const API_SECRET = process.env.VITE_API_SECRET;

    const authHeader = 'Basic ' + Buffer.from(`${API_KEY}:${API_SECRET}`).toString('base64');

    try {
        const response = await axios.get('https://api.astronomyapi.com/api/v2/bodies/positions', {
            params: {
                latitude,
                longitude,
                from_date,
                to_date,
                elevation,
                time
            },
            headers: {
                Authorization: authHeader
            }
        });

        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
}
