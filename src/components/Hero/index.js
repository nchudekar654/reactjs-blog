import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
/**
* @author
* @function Hero
**/

const Hero = (props) => {
  return(
    <div>
        <header className="header">
          <div>
            <i className="topIcon fab fa-facebook"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            <i className="topIcon fab fa-twitter"></i>
          </div>
        </header>
        <div className="logo">
          <h1>TECH BLOG</h1>
          <div className="navbar">
            <ul className="navbarMenu">
              <li><NavLink to="/">Home</NavLink></li>
            </ul>
          </div>
        </div>
    </div>
   )

 }

export default Hero