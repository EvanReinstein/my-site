import React from 'react';
import { NavLink } from 'react-router-dom';
import SideMenu from './HamburgerMenu';

const Navbar = () => {
    return (
        <nav className="main-nav">
          <div className="nav-wrap">
            <h1>
              <NavLink to="/" exact>Evan Reinstein</NavLink>
            </h1>
            <ul className="links">
              <li><NavLink className="link" to="/about">About</NavLink></li>
              <li><NavLink className="link" to="/projects">Projects</NavLink></li>
              <li><NavLink className="link" to="/experience">Experience</NavLink></li>
              <li><NavLink className="link last" to="/contact">Contact</NavLink></li>
            </ul>
          </div>
          <div className="wrap">
            <div className="hamburger">
              <SideMenu />
            </div>
          </div>
        </nav>
    )
}

export default Navbar;
