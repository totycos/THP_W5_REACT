const BASE_URL = 'https://api.openweathermap.org/';
const API_ID = `appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`

export const fetchData = async (location, option1, option2) => {
    // Get GPS coordonates 
    const responseGpsJson = await fetchDataGps(location, option1, option2);

    // Build final URL
    let finalUrl = `${BASE_URL}${option1}${option2}?lat=${responseGpsJson.city.coord.lat}&lon=${responseGpsJson.city.coord.lon}&${API_ID}`
    console.log('finalUrl :', finalUrl)
    // https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=41556d62527a7d612364820c20241385

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

const fetchDataGps = async (location, option1, option2) => {
    // Build final URL
    let finalUrl = `${BASE_URL}${option1}${option2}?q=${location}&${API_ID}`

    try {
        const response = await fetch(finalUrl);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        else {
            const responseGpsJson = await response.json()
            return responseGpsJson; // probably have to add conditions
        }

    } catch (error) {
        throw new Error('Error fetching GPS data');
    }
};