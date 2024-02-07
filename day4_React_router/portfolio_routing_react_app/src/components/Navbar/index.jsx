import React from 'react'
import { Link } from 'react-router-dom';
import './index.scss'

const Navbar = () => {

	return (
		<div className='navbar'>
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/works">Works</Link>
			<Link to="/contact">Contact</Link>
		</div>
	)
}

export default Navbar