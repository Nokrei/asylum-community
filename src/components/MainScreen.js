import React, { useState, useEffect, useContext } from "react";
import AppContext from "./AppContext";
import { useSpring, animated } from "react-spring";
import CookieConsent from "react-cookie-consent";
import { debounce } from "../utils/helpers";
import "./App.scss";
import "./MainScreen.scss";
import NavBar from "./NavBar";
import ToTop from "./ToTop";
import Home from "./Home";
import About from "./About";
import Staff from "./Staff";
import Testimonials from "./Testimonials";
import Emojis from "./Emojis";
import Join from "./Join";
import Footer from "./Footer";
//import(/*webpackPreload:true '*/ "../fonts/NothingYouCouldDo-Regular.ttf");

const MainScreen = () => {
  // State variable to set when creepy font has loaded.
  const [fontIsReady, setFontisReady] = useState(false);

  // Set font as ready after it's loaded, and conditionally render content
  // of MainsScreen (see return statement).
  useEffect(() => {
    document.fonts
      .load("12px NothingYouCouldDo")
      .then(() => setFontisReady(true));
  }, []);

  // Global state to catch scroll position
  const [globalState, setGlobalState] = useContext(AppContext);

  // State variables to get values for NavBar animation
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // Handle scroll event, dynamically push values to variables
  const handleScroll = debounce((e) => {
    const currentScrollPos = e.target.scrollTop;
    setGlobalState({
      visible:
        prevScrollPos > currentScrollPos + 10 ||
        currentScrollPos < prevScrollPos,
    });
    setPrevScrollPos(currentScrollPos);
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
      duration: 1000,
    },
  });

  return (
    fontIsReady && (
      <div onScroll={handleScroll} className="main-screen" id="main">
        <div>
          <animated.div style={fadeIn}>
            <Home style={{ opacity: ` ${1 - prevScrollPos / 500} ` }} />
            <About />

            <Testimonials />
            <Emojis />
            <Join />
            <Footer />
          </animated.div>
        </div>
        <ToTop
          style={{
            transform: globalState.visible ? `scale(0)` : "scale(1)",
            transition: "all 0.2s",
          }}
          link="/main#about"
        />

        <CookieConsent>
          This website uses cookies to enhance the user experience.
        </CookieConsent>
      </div>
    )
  );
};

export default MainScreen;
