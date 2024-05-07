import React from 'react'
import { Link } from 'react-router-dom';
import './Navbars.css';

const Navbars = () => {
  return (   
    <div>
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
       
        <li><Link to="https://github.com/Nishantsurve" className="contact-button">Contact</Link></li>
      </ul>
    </nav>
    
  </div>
  )
}

export default Navbars