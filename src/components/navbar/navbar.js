import React from 'react';
import './navbar.css';
import logo from '../../resources/logo.png';
import contactIcon from '../../resources/contacticon.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='topnav'>
        <img src={ logo } alt='logo' className='logo'/>
        <div className='desktopMenu'>
            <Link to='intro' smooth duration={ 500 } className="desktopMenuListItem">Home</Link>
            <Link to='portfolio' smooth duration={ 500 } className="desktopMenuListItem">Portfolio</Link>
            <Link to='aboutme' smooth duration={ 500 } className="desktopMenuListItem">About</Link>
        </div>
        <button className='contactMeBtn'>
            <Link to='contact' smooth duration={ 500 }></Link> Get In Touch
        </button>

    </nav>
  )
}

export default Navbar;