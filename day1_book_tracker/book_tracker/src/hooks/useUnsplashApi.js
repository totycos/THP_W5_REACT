import { useState } from 'react';
import { fetchData } from '../services/unsplashApi';

const useUnsplashApi = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchDataAsync = async () => {
    try {
      const res = await fetchData();
      setResponse(res);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { response, loading, error, fetchDataAsync };
};

export default useUnsplashApi;

