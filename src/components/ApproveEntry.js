import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSpring, animated, config } from "react-spring";
import AppContext from "./AppContext";
import eye from "../images/eye.png";
import "./Approve.scss";
const ApproveEntry = () => {
  const [globalState, setGlobalState] = useContext(AppContext);

  // To transition to next screen after animation
  const [animationComplete, setAnimationComplete] = useState(false);

  // Variables for image and text animations
  const [scale, setScale] = useState(1);
  const [textScale, setTextScale] = useState(6);

   // Variables for image and text animations for mobile
  const [mobileScale, setMobileScale] = useState(0);
  const [touchData, setTouchData] = useState({
    start: 0,
    end: 0,
  });

  // Function to trigger on mousewheel (not on scroll - overflow hidden)
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

  // Functions to trigger on mobile to simulate mousewheel
  const touchStart = (e) => {
    setScale(6)
  };
  const touchEnd = (e) => {
    setTouchData({
      ...touchData,
      end: e.changedTouches[0].clientY,
    });
  };
  useEffect(() => {
    if (touchData.start !== 0 && touchData.end !== 0) {
      if (touchData.start - touchData.end > 0) {
        setScale(scale + 1);
      setTextScale(textScale - 1);
      } else if (touchData.start - touchData.end < 0) {
        setScale(scale - 1);
        setTextScale(textScale + 1);
      }
    }
  }, [touchData]);

   console.log(mobileScale);
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
      onWheel={onWheel}
      onTouchStart={touchStart}
      onTouchEnd={touchEnd}
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
              <img className="eye" src={eye} />
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
            To the dark side
          </span>
          <br />
          <br/>
          <p
            style={{ fontSize: `calc(${textScale <= 6 && textScale}vw - 4vw)` }}
          >
            Scroll Down
          </p>
        </animated.div>
      ) : (
        <Redirect to="/main" />
      )}
    </div>
  );
};

export default ApproveEntry;
