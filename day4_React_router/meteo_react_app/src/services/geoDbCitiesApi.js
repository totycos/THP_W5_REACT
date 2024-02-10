const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=5000&sort=-population&namePrefix=';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7f8c80d45emsh3c84f5a5c62baaep134146jsnc77655cfcb48',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};

export const fetchDataCities = async (searchTerm) => {
    const finalUrl = url+searchTerm
    try {
        const response = await fetch(finalUrl, options);
        const result = await response.json();
        console.log(result);
        return result
    } catch (error) {
        console.error(error);
    }
}