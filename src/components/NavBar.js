import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { slide as Menu } from "react-burger-menu";
import useWindowDimensions from "../utils/useWindowDimensions";
import AsylumLogo from "../images/Asylum_Neon.png";
import "./App.scss";
import "./MainScreen.scss";
import "./NavBar.scss";
const NavBar = (props) => {
  // Get viewport width.
  const { width } = useWindowDimensions();

  // State variables to be set acordingly to viewport width.
  const [mobile, setMobile] = useState(false);

  // State variables to manage hamburger meny style.
  const [burgerBarClass, setBurgerBarClass] = useState("bm-burger-bars");

  // State variables to manually handle side menu.
  const [toggleMenu, setToggleMenu] = useState(false);

  // Depending on viewport width, adjust state variables.
  useEffect(() => {
    width > 1025 ? setMobile(false) : setMobile(true);
  }, [width]);

  // Handle closing / opening side menu and hamburger menu style.
  const toggleBurger = (e) => {
    if (burgerBarClass === "bm-burger-bars") {
      setBurgerBarClass("bm-burger-cross");
      setToggleMenu(true);
    } else {
      setBurgerBarClass("bm-burger-bars");
      setToggleMenu(false);
    }
  };

  const showSettings = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      {!mobile ? (
        <div style={props.style} className="top-nav  creepy-font">
          <span className="top-nav__item">
            <Link to="/main#about">About Us</Link>
          </span>

          <span className="top-nav__item--blue">
            <Link to="/main#testimonials">Testimonials</Link>
          </span>
          <img className="top-nav__logo" alt="logo" src={AsylumLogo} />
          <span className="top-nav__item">
            <Link to="/main#join">Join Us</Link>
          </span>
          <span className="top-nav__item--blue">
            <Link to="/merchandise">Merchandise</Link>
          </span>
        </div>
      ) : (
        <Menu
          isOpen={toggleMenu}
          onOpen={toggleBurger}
          onClose={toggleBurger}
          disableAutoFocus
          burgerBarClassName={burgerBarClass}
          width={300}
        >
          <Link
            to="/main#about"
            onClick={toggleBurger}
            className="top-nav__item  creepy-font"
          >
            About Us
          </Link>

          {/* <Link
            to="/main#staff"
            onClick={toggleBurger}
            className="top-nav__item--blue  creepy-font"
          >
            Staff
          </Link> */}

          <Link
            to="/main#testimonials"
            onClick={toggleBurger}
            className="top-nav__item--blue  creepy-font"
          >
            Testimonials
          </Link>
          <Link
            to="/main#join"
            onClick={toggleBurger}
            className="top-nav__item  creepy-font"
          >
            Join Us
          </Link>
          <Link
            to="/merchandise"
            onClick={toggleBurger}
            className="top-nav__item--blue  creepy-font"
          >
            Merchandise
          </Link>
          {/* <Link
            to="/gallery"
            onClick={toggleBurger}
            className="top-nav__item--blue  creepy-font"
          >
            Gallery
          </Link> */}
        </Menu>
      )}
    </div>
  );
};

export default NavBar;
