import React from 'react'
import { Link } from 'react-router-dom';
import './index.scss'

const Navbar = () => {

	return (
		<div className='navbar'>
			<Link to="/">Home</Link>
		</div>
	)
}

export default Navbar