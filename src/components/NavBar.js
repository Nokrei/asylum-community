import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import AsylumLogo from "../images/Asylum_Neon.png";
import "./App.scss";
import "./MainScreen.scss";
const NavBar = (props) => {

  
  return (
    <div style={props.style} className="top-nav">
      <span className="top-nav__item">
        <Link to="/main#about">about us</Link>
      </span>
      <span className="top-nav__item">
        <Link to="/main#staff">staff</Link>
      </span>
      <img className="top-nav__logo" src={AsylumLogo} />
      <span className="top-nav__item">
        <Link to="/main#testimonials">testimonials</Link>
      </span>
      <span className="top-nav__item">join us</span>
    </div>
  );
};

export default NavBar;
