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
          <Link to='/userlogin/diary'>
            <li><a href="#">Home</a></li></Link>
            <Link><li><a href="#">Status</a></li></Link>
            <Link><li><a href="#">Events</a></li></Link>
        </ul>
      </nav>
    </div>
       <div className='userProfile'>
       <Avatar src="/broken-image.jpg" alt='user'/>
       <Link to='/'><div className='signout'></div></Link>
      </div>
    </div>
    </div>
  )

}

export default Navbar