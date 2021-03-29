import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import AsylumLogo from "../images/Asylum_Neon.png";
import "./App.scss";
import "./MainScreen.scss";
const NavBar = (props) => {

  
  return (
    <div style={props.style} className="top-nav accent-font">
      <span className="top-nav__item">
        <Link to="/main#about">About Us</Link>
      </span>
      <span className="top-nav__item">
        <Link to="/main#staff">Staff</Link>
      </span>
      <img className="top-nav__logo" src={AsylumLogo} />
      <span className="top-nav__item">
        <Link to="/main#testimonials">Testimonials</Link>
      </span>
      <span className="top-nav__item">Join Us</span>
    </div>
  );
};

export default NavBar;
