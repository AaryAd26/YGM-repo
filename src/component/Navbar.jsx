import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';
import logo from "../assets/logo.png";  
const Navbar = () => {
  return (
    <nav className="navbar white">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo-link">
          <img src={logo} alt="YGM Logo" className="navbar-logo" />
          <h2 className="navbar-title">
            <span className="navbar-title-main">Yuvak Ganesh Mandal</span><br />
            <span className="navbar-title-sub">Social Foundation</span>
          </h2>
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/activities" className="navbar-link">Activities</Link>
        <Link to="/gallery" className="navbar-link">Gallery</Link>
        <Link to="/contact" className="navbar-link">Contact</Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
