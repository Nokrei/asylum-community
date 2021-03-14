import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSpring, animated, config } from "react-spring";
import DelayLink from "react-delay-link";
import AppContext from "./AppContext";
import "./Approve.scss";
const ApproveEntry = () => {
  const [globalState, setGlobalState] = useContext(AppContext);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [scale, setScale] = useState(0);
  const onWheel = (e) => {
    e.deltaY > 0 ? setScale(scale + 10) : setScale(scale - 10);
  };
  console.log(scale);
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

  const [state, setState] = useState({
    one: "circle-one",
    two: "circle-two",
    three: "circle-three",
  });
  useEffect(() => {
    if (scale > 50) {
      setState({
        one: "circle-one__animated",
        two: "circle-two__animated",
        three: "circle-three__animated",
      });
    }
  }, [scale]);

  const handleClick = () => {
    setGlobalState({
      changeLayout: true,
    });
  };
  const handleAnimationEnd = () => {
    setAnimationComplete(true);
  };
  animationComplete && <Redirect to="/main" />;
  console.log(animationComplete);
  return (
    <div onWheel={onWheel}>
      {!animationComplete ?   <animated.div style={fadeIn} className="approve-text">
        <span className="white-font">Whalecum</span>
        <br />
        <span className="approve-text__medium accent-font">
          To the dark side
        </span>
        <br />
        <p style={{fontSize:'1rem'}}>Scroll Down</p>

        <div className="circle-container">
          <div
            style={{ transform: `scale(${scale > -1 && scale})` }}
            className="circle-initial"
          ></div>
          <div className={state.one}></div>
          <div className={state.two}></div>
          <div
            className={state.three}
            onAnimationEnd={handleAnimationEnd}
          ></div>
        </div>
      </animated.div> : <Redirect to="/main" />}
    
    </div>
  );
};

export default ApproveEntry;
