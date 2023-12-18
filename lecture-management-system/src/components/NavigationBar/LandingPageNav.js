import React from 'react'
import './Navbar.css'
import Logo from '../../assets/Logo.png'

export const LandingPageNav = () => {
 
  return (
    <div className='nav-container'>
    <div className='nav-main'>
      <div className='nav-logo'>
        <img src={Logo} alt='logo'/>
    </div>
    <div className='nav-menu'>
    </div>
       <div className='userProfile'>
      </div>
    </div>
    </div>
  )

}

export default LandingPageNav