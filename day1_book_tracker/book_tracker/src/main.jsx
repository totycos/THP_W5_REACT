import React from 'react'
import ReactDOM from 'react-dom'
import Books from './components/Books'
import useUnsplashApi from './hooks/useUnsplashApi';
import './index.scss'
import { useEffect } from 'react';


const App = () => {

  const { response, loading, error, fetchDataAsync } = useUnsplashApi();

  const title = response && response.books && response.books[0] && response.books[0][0]?.title;

  console.log('response:', response);
  console.log('specific data:', title);

  useEffect(() => {
    fetchDataAsync()
  },[])

  return (
    <div>
      <Books response={response} loading={loading} error={error}/>
    </div>

  )
};

ReactDOM.render(<App />, document.getElementById('root')); 