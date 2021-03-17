import React from "react";
import { useSpring, animated, config } from "react-spring";
import AsylumLogo from "../images/Asylum_Neon.png";
import "./MainScreen.scss";
import Home from "./Home";
const MainScreen = () => {
  const fadeIn = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: {
      duration: 500,
    },
  });
  return (
    <div className="main-screen">
      <animated.div style={fadeIn}>
        <div className="top-nav">
          <span className="top-nav__item">home</span>
          <span className="top-nav__item">activity</span>
          <img className="top-nav__logo" src={AsylumLogo} />
          <span className="top-nav__item">staff</span>
          <span className="top-nav__item">join</span>
        </div>
        <Home />
        
      </animated.div>
    </div>
  );
};

export default MainScreen;
