import React, { useEffect } from 'react';
import './index.scss'

const Book = ({ data }) => {
  const { title, thumbnailUrl } = data;

  return (
    <li className='card'>
      <img src={thumbnailUrl} alt='book cover' className='card__img'/>
      <div className='card__info'>
        <p className='card__info__title'> {title}</p>
      </div>
    </li>
  );
};


export default Book;
