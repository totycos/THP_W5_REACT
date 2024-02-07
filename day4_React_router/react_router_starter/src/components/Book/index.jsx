import React from 'react'
import books from '../../data/books'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const Book = () => {
    const { bookSlug } = useParams();
    const [currentBook, setCurrentBook] = useState(undefined)

    useEffect(() => {
        const foundBook = books.find((book) => book.slug === bookSlug);
        setCurrentBook(foundBook);
    }, [bookSlug])

    return (
        <div className="book">
            {currentBook !== undefined ? (
                <>
                    <h1 className="title">{currentBook.title}</h1>
                    <p className="author">{currentBook.author}</p>
                    <p className="description">{currentBook.description}</p>
                </>
            ) : (
                <p>Book doesn't exist</p>
            )}
        </div>
    );
}

export default Book