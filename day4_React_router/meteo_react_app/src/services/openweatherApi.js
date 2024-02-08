const BASE_URL = 'api.openweathermap.org/data/2.5/';
const API_ID = `appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`

export const fetchData = async (type, location) => {
    // Build final URL
    let finalUrl = BASE_URL
   

    try {
        const response = await fetch(finalUrl);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        else {
            const responseJson = await response.json()
            return responseJson; // probably have to add conditions
        }

    } catch (error) {
        throw new Error('Error fetching data');
    }
};
