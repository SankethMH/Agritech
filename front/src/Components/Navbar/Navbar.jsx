import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart.png'
import nav_dropdown from '../Assets/nav_dropdown.png'
import { Link } from 'react-router-dom'
import { HomeContext } from '../../Context/HomeContext'

const Navbar = () => {

  const [menu,setMenu] = useState("Home");
  const {getTotalCartItems}=useContext(HomeContext)
  const menuRef=useRef();

  const dropdown_toggle=(e)=>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
  }
  return (

      <div className='navbar'>
          <div className='nav-logo'>
              <img src={logo} width="150px" alt=""/>
          </div>
          <img className='nav-dropdown' onClick={dropdown_toggle}src={nav_dropdown}alt=""/>
          <ul ref={menuRef} className="nav-menu">
                <li onClick={()=>{setMenu("Home")}}><Link style={{textDecoration:'none',color:'black'}} to='/'>Home</Link>{menu==="Home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Fertilizers")}}><Link style={{textDecoration:'none',color:'black'}} to='/Fertilizers'>Fertilizers</Link>{menu==="Fertilizers"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Pesticides")}}><Link style={{textDecoration:'none',color:'black'}} to='/Pesticides'>Pesticides</Link>{menu==="Pesticides"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Equipments")}}><Link style={{textDecoration:'none',color:'black'}} to='/Equipments'>Equipments</Link>{menu==="Equipments"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Seeds")}}><Link  style={{textDecoration:'none',color:'black'}} to='/Seeds'>Seeds</Link>{menu==="Seeds"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Vendors")}}><Link  style={{textDecoration:'none',color:'black'}} to='/vendors'>Vendors</Link>{menu==="Vendors"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Events")}}><Link  style={{textDecoration:'none',color:'black'}} to='/eve'>Events</Link>{menu==="Events"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Blogs")}}><Link style={{textDecoration:'none',color:'black'}} to='/resources'>Blogs</Link>{menu==="Blogs"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Account")}}><Link style={{textDecoration:'none',color:'black'}} to='/account'>Account</Link>{menu==="Account"?<hr/>:<></>}</li>
          </ul>
          <div className='nav-login-cart'>
            {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:<Link to='/Login'><button>Login</button></Link>}
            <Link to='/Cart'><img src={cart_icon} alt=""/></Link>
          </div>
            <div className='nav-cart-count'>
                {getTotalCartItems()}
            </div>
      </div>
      
   
  )
}

export default Navbar