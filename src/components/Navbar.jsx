import React from 'react'
import {Link} from 'react-router-dom'
import {RxCrossCircled} from 'react-icons/rx' 
import '../App.css'
const Navbar = (prop) => {
  return (
    <div className='navbar'>
      <Link to='/' onClick={prop.handleClick}><RxCrossCircled /></Link>
      <ul className='navbar-list'>
        <li><Link to='/' onClick={prop.handleClick} style={{textDecoration: 'none'}}><h2 className='navbar-list-opt'>Home</h2></Link></li>
        <li><Link to='/status' onClick={prop.handleClick} style={{textDecoration: 'none'}}><h2  className='navbar-list-opt'>Status</h2></Link></li>
        <li><Link to='/contact' onClick={prop.handleClick} style={{textDecoration: 'none'}}><h2  className='navbar-list-opt'>Contact Us</h2></Link></li>
      </ul>
    </div>
  )
}

export default Navbar