import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => (
	<header>
		This is the header
		<ul>
			<li><Link to='/'>Home</Link></li>
			<li><Link to='/music'>Music</Link></li>
			<li><Link to='/members'>Members</Link></li>
			<li><Link to='/events'>Events</Link></li>
		</ul>
	</header>
)

export default Header