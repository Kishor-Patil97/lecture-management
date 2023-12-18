import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import { Avatar } from '@mui/material'

export const Navbar = () => {
 
  return (
    <div className='nav-container'>
    <div className='nav-main'>
    <div className='nav-logo'>
        <img src={Logo} alt='logo'/>
    </div>
    <div className='nav-menu'>
    <nav>
        <ul>
          <Link to='/home'>
            <li><a href="#">Home</a></li></Link>
            <Link to='/tabs'><li><a href="#">Status</a></li></Link>
            <Link to='/addEvent'><li><a href="#">Events</a></li></Link>
        </ul>
      </nav>
    </div>
       <div className='userProfile'>
       <Link to='/'>
       <Avatar src="/broken-image.jpg" alt='user'/>
       </Link>
      </div>
    </div>
    </div>
  )

}

export default Navbar