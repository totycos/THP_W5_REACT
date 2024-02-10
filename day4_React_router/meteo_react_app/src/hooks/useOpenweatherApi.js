import { useState } from 'react';
import { fetchData } from '../services/openweatherApi';

const useOpenweatherApi = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchDataOneDay = async (location = 'Paris', option1 = '/data/2.5', option2 = '/weather') => {
    try {
      const res = await fetchData(location, option1, option2);
      setResponse(res);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchDataFiveDays = async (location = 'Chamonix', option1 = '/data/2.5', option2 = '/forecast') => {
    try {
      console.log(location)
      const res = await fetchData(location, option1, option2);
      setResponse(res);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { response, loading, error, fetchDataOneDay, fetchDataFiveDays };
};

export default useOpenweatherApi;

