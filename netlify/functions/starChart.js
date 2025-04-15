import axios from 'axios';


const BASE_URL = 'https://api.astronomyapi.com/api/v2/studio/star-chart';

const authHeader = 'Basic ' + Buffer.from(
    `${process.env.VITE_API_KEY}:${process.env.VITE_API_SECRET}`
).toString('base64');

export async function handler (event) {
    const params = event.queryStringParameters;

    try {
        const response = await axios.get(BASE_URL, {
            headers: { Authorization: authHeader },
            params
        });

        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        };
    } catch (error) {
        return {
            statusCode: error.response?.status || 500,
            body: JSON.stringify({ error: error.message })
        };
    }
}
