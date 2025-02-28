import React from 'react'
import { Link } from 'react-scroll'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {
  return (
    <div className='header'>
        {/* left part */}
        <div className='header_left'>
            <h2>Portfolio.</h2>
        </div>
        {/* right part */}
        <div className='header_right'>
            <Link to="home" smooth={true} duration={500}>
            <h4>Home</h4>
            </Link>
            <Link to="about" smooth={true} duration={500}>
            <h4>About</h4>
            </Link>
            <Link to="skill" smooth={true} duration={500}>
            <h4>Skills</h4>
            </Link>
            <Link to="project" smooth={true} duration={500}>
            <h4>Projects</h4>
            </Link>
        </div>
        {/* Menu icon for small screen */}
        <div className='header_menu'>
            <MenuIcon/>
        </div>
        
    </div>
  )
}
