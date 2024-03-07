import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/logo.png'
import navProfile from '../../assets/nav-profile.svg'

const Navbar =()=>{
    return (
        <div className='navbar'>
            <img src={navlogo} className='nav-logo' style={{width:200 ,height:67}}/>
            <img src={navProfile} className='nav-profile'/>
        </div>
    )
}

export default Navbar