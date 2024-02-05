const BASE_URL = 'https://gist.githubusercontent.com/MathisDYKDan/76bc73ec77481ccb82677cc7c0d8b524/raw/a23c99027b9bfc1bfdb22e22ddcb4301a5f870ee/books.json';

export const fetchData = async () => {
    // Build final URL
    let finalUrl = BASE_URL
    

    try {
        const response = await fetch(finalUrl);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        else {
            const responseJson = await response.json()
            return responseJson;
        }

    } catch (error) {
        throw new Error('Error fetching data');
    }
};
