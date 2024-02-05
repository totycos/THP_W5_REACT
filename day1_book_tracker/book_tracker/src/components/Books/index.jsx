import React from 'react';
import { useState } from 'react';
import Book from '../Book'
import './index.scss'

const Books = ({ response, loading, error }) => {

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading images: {error.message}</p>;

  return (

    <div className='cardContainer'>
      {response.books[0].map((bookData) => (
        <Book data={bookData} key={bookData.id} />
      ))}
    </div>
  );
};

export default Books;
