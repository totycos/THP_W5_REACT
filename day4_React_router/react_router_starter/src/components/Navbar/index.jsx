import React from 'react'
import { Link } from 'react-router-dom';
import books from '../../data/books'
import './index.scss'

const Navbar = () => {
console.log(books[0].slug)

  return (
    <div className='navbar'>
			<Link to="/">Home</Link> 
			<Link to="/about">About</Link>
			<Link to="/documentation">Documentation</Link>
			{books.map(book => (
				<Link to={`/book/${book.slug}`} key={book.slug}>{book.title}</Link>
			))}
		</div>
  )
}

export default Navbar