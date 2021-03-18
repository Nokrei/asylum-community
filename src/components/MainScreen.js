import React, {useRef} from "react";
import { useSpring, animated, config } from "react-spring";
import AsylumLogo from "../images/Asylum_Neon.png";
import "./MainScreen.scss";
import Home from "./Home";
import Staff from './Staff'
const MainScreen = () => {
const handleScroll = (e) =>{
  console.log(e);
}
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
    <div onScroll={handleScroll} className="main-screen" >
      <animated.div style={fadeIn}>
        <div className="top-nav">
          <span className="top-nav__item">about us</span>
          <span className="top-nav__item">staff</span>
          <img className="top-nav__logo" src={AsylumLogo} />
          <span className="top-nav__item">events</span>
          <span className="top-nav__item">join us</span>
        </div>
        <Home />
        
       
        <Staff/>
       
        
      </animated.div>
    </div>
  );
};

export default MainScreen;
