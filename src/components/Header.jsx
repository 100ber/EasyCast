import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi';
import { Link } from 'react-router-dom';
import '../App.css'
import logo from '../logo.png'
const Header = (prop) => {

  const redirectL = () => {
    window.location.replace('/login');
  }
  const redirectR = () => {
    window.location.replace('/register');
  }

  return (
    <div>
      <header className='header'>
        <Link to='/navbar' className='header-navicon' onClick={prop.handleClick}><GiHamburgerMenu /></Link>
        <img id='header-img' src={logo} width="53px" height='50px'margin='40px'/>
        <Link to='/' style={{textDecoration:'none'}}><h1 className='header-title'>EasyCast</h1></Link>
      </header>
      <br></br>
      <br></br>
      </div>

  )
}

export default Header