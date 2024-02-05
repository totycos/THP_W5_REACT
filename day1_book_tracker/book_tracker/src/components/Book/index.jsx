import React, { useEffect } from 'react';
import './index.scss'

const Book = ({ data, bookId, onWannaRead, onFavorite }) => {
  const { title, thumbnailUrl } = data;

  const handleWannaRead = () => {
    onWannaRead(bookId)
  }

  const handleFavorite = () => {
    onFavorite(bookId)
  }

  return (
    <li className='card'>
      <img src={thumbnailUrl} alt='book cover' className='card__img'/>
      <div className='card__info'>
        <p className='card__info__title'> {title}</p>
        <p className='card__info__wannaRead' onClick={handleWannaRead}>Wanna read it</p>
        <p className='card__info__favorite' onClick={handleFavorite}>Put in my favorite</p>
      </div>
    </li>
  );
};


export default Book;
