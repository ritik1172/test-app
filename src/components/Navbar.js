import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css';

const Navbar = () => {
  return (
    <div>
      <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </nav>
    </div>
  )
}

export default Navbar
