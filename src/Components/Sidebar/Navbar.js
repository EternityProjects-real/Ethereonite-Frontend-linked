import React from 'react'
import "./Navbar.css";

import logo from '../../Assets/logo.png';


const Navbar = ({ sidebarOpen, openSidebar }) => {
return (
  <div>
    <img className='m' src={logo} alt="profile pic" />
  </div>
  );
};

export default Navbar;