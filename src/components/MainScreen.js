import React, { useState, useEffect, useContext } from "react";
import { useInView } from "react-intersection-observer";
import AppContext from "./AppContext";
import { useSpring, animated, config } from "react-spring";
import { debounce } from "../utils/helpers";
import "./App.scss";
import "./MainScreen.scss";
import NavBar from "./NavBar";
import ToTop from './ToTop'
import Home from "./Home";
import About from "./About";
import Staff from "./Staff";
import Testimonials from "./Testimonials";
import Emojis from "./Emojis";
import Join from "./Join";

const MainScreen = () => {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  // Global state to catch scroll position
  const [globalState, setGlobalState] = useContext(AppContext);

  // State variable to get values for opacity animation
  const [checkScroll, setCheckscroll] = useState(0);

  // State variables to get values for NavBar animation
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // Handle scroll event, dynamically push values to variables
  const handleScroll = debounce((e) => {
    setGlobalState({
      scrollPosition:
        e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop,
    });

    const currentScrollPos = e.target.scrollTop;
    setVisible(
      prevScrollPos > currentScrollPos + 10 || currentScrollPos < prevScrollPos
    );
    setPrevScrollPos(currentScrollPos);

    setCheckscroll(e.target.scrollTop / globalState.scrollPosition);
  }, 1);

  // Spring animation for initial fade-in
  const fadeIn = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: {
      duration: 200,
    },
  });

  return (
    <div onScroll={handleScroll} className="main-screen" id="main">
      <div>
        <animated.div style={fadeIn}>
          <NavBar
            style={{ top: visible ? "0" : "-200px", transition: "top 0.6s" }}
          />
          <Home style={{ opacity: ` ${1 - prevScrollPos / 500} ` }} />
          <About  />
          <Staff />
          <Testimonials />
          <Emojis />
          <Join />
          <ToTop style={{transform: visible ? `scale(0)` : 'scale(1)', transition:'all 0.2s'}}/>
        </animated.div>
      </div>
    </div>
  );
};

export default MainScreen;
