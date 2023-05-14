import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './components/Home';
import Register from './components/Register';
import Contact from './components/Contact';
import Login from './components/Login';
import Status from './components/Status';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Parties from './components/Parties';

function App() {
  const [isNav, setIsNav] = React.useState(false);
  const handleNav = () => {
    setIsNav(true);
  }
  const handleNavClose = () => {
    setIsNav(false);
  }
  return (
    <div className='app'>
      {isNav ? " ": <Header handleClick={handleNav}/>}
      <Routes>
        <Route path='/'element={<Home/>} />
        <Route path='/navbar'element={<Navbar handleClick={handleNavClose}/>} />
        <Route path='/register'element={<Register/>} />
        <Route path='/contact'element={<Contact/>} />
        <Route path='/login'element={<Login/>} />
        <Route path='/status'element={<Status/>} />
        <Route path='/parties' element={<Parties/>}/>
      </Routes>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default App;
