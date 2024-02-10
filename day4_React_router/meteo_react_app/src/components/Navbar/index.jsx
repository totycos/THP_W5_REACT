import React from 'react'
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';
import './index.scss'

const Navbar = ({ onSearch }) => {



	return (
		<div className='navbar'>
			<Link to="/">weatherApp.</Link>
			<SearchBar onSearch={onSearch}/>
		</div>
	)
}

export default Navbar