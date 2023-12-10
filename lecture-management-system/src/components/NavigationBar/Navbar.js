import React from 'react'
import BrandLogo from '../../UI/BrandLogo'
import './DesktopMenu.css'
import { Link } from 'react-router-dom'
import { Avatar } from '@mui/material'
import { Logout } from '@mui/icons-material'

const DesktopMenu = () => {
 
  return (
    <div className='headerbefore'>
    <header className='header'>
      <BrandLogo />
      <nav>
        <ul>
          <Link to='/userlogin/diary'><li><a href="#">Diary</a></li></Link>
          <Link><li><a href="#">Activities</a></li></Link>
          <li><a href="#">About Us</a></li>
        </ul>
      </nav>
       <div className='userProfile'>
       <p>Hello XXXXXXXX</p>
       <Avatar src="/broken-image.jpg" />
       <Link to='/'><div className='signout'><Logout/></div></Link>
      </div>

    </header>
    </div>
  )

}

export default DesktopMenu