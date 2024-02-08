import { useState } from 'react';
import { fetchData } from '../services/unsplashApi';

const useOpenweatherApi = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchDataOneDay = async (type = 'weather', location = 'Paris') => {
    try {
      const res = await fetchData(type, location);
      setResponse(res);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchDataFiveDays = async (type = 'forecast', location = 'Paris') => {
    try {
      
      setResponse((res);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { response, loading, error, fetchDataOneDay, fetchDataFiveDays };
};

export default useOpenweatherApi;

