import React, { useState, useEffect, useContext } from "react";
import AppContext from "./AppContext";
import { useSpring, animated, config } from "react-spring";
import AsylumLogo from "../images/Asylum_Neon.png";
import "./MainScreen.scss";
import Home from "./Home";
import Staff from "./Staff";
import brick from "../images/brick.jpg";
const MainScreen = () => {
  // Global state to catch scroll position
  const [globalState, setGlobalState] = useContext(AppContext);

  // State variable to get values for opacity animation
  const [checkScroll, setCheckscroll] = useState(0);

  // Handle scroll event, dynamically push values to variables
  const handleScroll = (e) => {
    setGlobalState({
      scrollPosition:
        e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop,
    });
    setCheckscroll(e.target.scrollTop / globalState.scrollPosition);
  };

  // Testing
  // useEffect(() => {
  //   console.log(checkScroll);
  // }, [globalState.scrollPosition]);

  // Spring animation for initial fade-in
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
    <div
      onScroll={handleScroll}
      style={{ backgroundImage: `url(${brick}) `, backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'cover' }}
      className="main-screen"
      id="main"
    >
      <div style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
        <animated.div style={fadeIn}>
          <div className="top-nav">
            <span className="top-nav__item">about us</span>
            <span className="top-nav__item">staff</span>
            <img className="top-nav__logo" src={AsylumLogo} />
            <span className="top-nav__item">events</span>
            <span className="top-nav__item">join us</span>
          </div>
          <Home style={{ opacity: ` ${1 - checkScroll * 7} ` }} />

          <Staff />
        </animated.div>
      </div>
    </div>
  );
};

export default MainScreen;
