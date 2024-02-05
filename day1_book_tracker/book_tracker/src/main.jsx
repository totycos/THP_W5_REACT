import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/SearchBar'
import Books from './components/Books'
import useUnsplashApi from './hooks/useUnsplashApi';
import './index.scss'
import { useEffect, useState } from 'react';


const App = () => {

  const { response, loading, error, fetchDataAsync } = useUnsplashApi();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    fetchDataAsync()
  },[])

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Books response={response} loading={loading} error={error} searchTerm={searchTerm} />
    </div>

  )
};

ReactDOM.render(<App />, document.getElementById('root')); 