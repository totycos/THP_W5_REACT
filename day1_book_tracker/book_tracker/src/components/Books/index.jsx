import React from 'react';
import { useState, useEffect } from 'react';
import Book from '../Book'
import './index.scss'

const Books = ({ response, loading, error, searchTerm }) => {
  console.log(response)
  const [data, setData] = useState(response ? response.books[0] : null)

  useEffect(() => {
    const handleStorageChange = () => {
      
      // Set all the data
      if (response) { setData(response.books[0])}

      // Set data with searched term
      if (searchTerm) { setData(
            response.books[0].filter((book) =>
              book.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
          )}
    };

    handleStorageChange();
  }, [searchTerm, response]); 
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading images: {error.message}</p>;

  return (

    <div className='cardContainer'>
    {data ? (
      data.map((bookData, index) => (
        <Book data={bookData} key={index} />
      ))
    ) : (
      <p>No books to display.</p>
    )}
  </div>
  );
};

export default Books;
