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
  const [wannaRead, setWannaRead] = useState([]);
  const [favorite, setFavorite] = useState([]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleWannaRead = (bookId) => {
    if (!wannaRead.includes(bookId)) {
      setWannaRead((prevWannaRead) => [...prevWannaRead, bookId]);
    }
  }

  const handleFavorite = (bookId) => {
    if (!favorite.includes(bookId)) {
      setFavorite((prevFavorite) => [...prevFavorite, bookId]);
    }
  }

  console.log('wanaRead :',wannaRead)
  console.log('favorite :',favorite)

  useEffect(() => {
    fetchDataAsync()
  },[])

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Books response={response} loading={loading} error={error} searchTerm={searchTerm} onWannaRead={handleWannaRead} onFavorite={handleFavorite} favorite={favorite} wannaRead={wannaRead} />
    </div>

  )
};

ReactDOM.render(<App />, document.getElementById('root')); 