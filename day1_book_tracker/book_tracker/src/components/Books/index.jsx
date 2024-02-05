import React from 'react';
import { useState, useEffect } from 'react';
import Book from '../Book'
import './index.scss'

const Books = ({ response, loading, error, searchTerm, onWannaRead, onFavorite, favorite, wannaRead }) => {
  console.log(response)
  const [data, setData] = useState(response ? response.books[0] : null)
  const [displayFavorite, setDisplayFavorite] = useState(false);
  const [displayWannaRead, setDisplayWannaRead] = useState(false);

  const handleDisplayFavoriteChange = () => {
    setDisplayFavorite(!displayFavorite); // Inverser l'état actuel
  };

  const handleDisplayWannaReadChange = () => {
    setDisplayWannaRead(!displayWannaRead); // Inverser l'état actuel
  };

  useEffect(() => {
    const handleStorageChange = () => {

      // Set all the data
      if (response) { setData(response.books[0]) }

      // Set data with searched term
      if (searchTerm) {
        setData(
          response.books[0].filter((book) =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        )
      }
    };

    handleStorageChange();
  }, [searchTerm, response]);

  useEffect(() => {
    // Set data with favorite
    if (displayFavorite) {
      setData(
        favorite.map((f) =>
          response.books[f]
        )
      )
    }
    console.log('data apres favorite/waanaRead :', data)
  }, [displayFavorite])

  useEffect(() => {
    // Set data with wannaRead
    if (displayWannaRead) {
      setData(
        wannaRead.map((w) =>
          response.books[w]
        )
      )
    }
  }, [displayWannaRead])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading images: {error.message}</p>;

  return (

    <div className='cardContainer'>
      <div>
        <label>
          <input
            type="checkbox"
            checked={displayFavorite}
            onChange={handleDisplayFavoriteChange}
          />
          Favorite
        </label>

        <br />

        <label>
          <input
            type="checkbox"
            checked={displayWannaRead}
            onChange={handleDisplayWannaReadChange}
          />
          Wanna Read
        </label>
      </div>

      {data ? (
        data.map((bookData, index) => (
          <Book data={bookData} key={index} bookId={index} onWannaRead={onWannaRead} onFavorite={onFavorite} />
        ))
      ) : (
        <p>No books to display.</p>
      )}
    </div>
  );
};

export default Books;
