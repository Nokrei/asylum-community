import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSpring, animated, config } from "react-spring";
import { useRect } from "react-use-rect";

import AppContext from "./AppContext";
import eye from "../images/eye2.png";
import "./Approve.scss";
const ApproveEntry = () => {
  
  const [globalState, setGlobalState] = useContext(AppContext);
  // Using useRect, get access to {eye} dimensions and position.
  const [ref, rect] = useRect();

  // State variable to store mouse position.
  const [mousePos, setMousePos] = useState({ posY: 0, posX: 0 });

  // Update relevant state variable with current mouse position and calclate
  // fitting values to be used in animation (RotateX and RotateY).
  const handleMouseMove = (e) => {
    setMousePos({
      posY: -(e.clientY - rect.y - rect.height / 2) / 20,
      posX: (e.clientX - rect.x - rect.width / 2) / 20,
    });
  };

  
  // To transition to next screen after animation.
  const [animationComplete, setAnimationComplete] = useState(false);

  // Variables for image and text animations.
  const [scale, setScale] = useState(1);
  const [textScale, setTextScale] = useState(6);

  

  // Function to trigger on mousewheel (not on scroll - overflow hidden).
  const onWheel = (e) => {
    if (e.deltaY > 0) {
      setScale(scale + 1);
      setTextScale(textScale - 1);
    } else {
      setScale(scale - 1);
      setTextScale(textScale + 1);
    }
    if (textScale > 6) {
      setTextScale(6);
      setScale(0);
    }
  };

  // State variable to be updated if user touches screen
  const [touch, setTouch] = useState(false)
 
  const handleTouch = ()=>{
    setTouch(true)
  }

  // After user touches screen, increase scale of {eye} by [0.1] every [1] ms
  useEffect(() => {
    const interval = setInterval(()=>{
      if (touch){
        setScale(scale + 0.1)
      }
      
      console.log(scale);
    },1)
    return () => {
      clearInterval(interval)
    }
  }, [touch, scale])

  
  
  
  // console.log("scale: " + scale);
  // console.log("text: " + textScale);

  // React spring animation for initial fade in
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

  // Variables that contain class names for circle elements
  const [state, setState] = useState({
    one: "circle-one",
    two: "circle-two",
    three: "circle-three",
  });

  // Assign animated classes to circle elements when the eye reaches desired size
  useEffect(() => {
    if (scale > 5) {
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

  // Execute redirect
  const handleAnimationEnd = () => {
    setAnimationComplete(true);
  };
  animationComplete && <Redirect to="/main" />;

  return (
    <div
      className="approve-container"
      onMouseMove={handleMouseMove}
      onWheel={onWheel}
      onTouchStart={handleTouch}
    >
      {!animationComplete ? (
        <animated.div style={fadeIn} className="approve-text">
          <span
            className="white-font"
            style={{ fontSize: `${textScale <= 6 && textScale}vw` }}
          >
            Whalecum
          </span>
          <br />
          <br />
          <div className="circle-container">
            <div
              className="eye-container"
              style={{ transform: `scale(${scale > 0 && scale})` }}
            >
              <img
                ref={ref}
                className="eye"
                src={eye}
                style={{
                  transform: `perspective(100px) rotateY(${
                    mousePos.posX 
                  }deg) rotateX(${mousePos.posY}deg)`,
                }}
              />
            </div>
            <div className={state.one}></div>
            <div className={state.two}></div>
            <div
              className={state.three}
              onAnimationEnd={handleAnimationEnd}
            ></div>
          </div>

          <br />
          <br />
          <span
            style={{ fontSize: `calc(${textScale <= 6 && textScale}vw - 3vw)` }}
            className="approve-text__medium accent-font"
          >
            to the dark side
          </span>
          <br />
          <br />
          <p
            style={{ fontSize: `calc(${textScale <= 6 && textScale}vw - 4vw)` }}
          >
            SCROLL DOWN
          </p>
        </animated.div>
      ) : (
        <Redirect to="/main" />
      )}
    </div>
  );
};

export default ApproveEntry;
