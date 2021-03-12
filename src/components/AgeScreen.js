import React, { useState } from "react";
import { Link } from "react-router-dom";
import DelayLink from 'react-delay-link';
import { useSpring, animated, config } from "react-spring";
import "./AgeScreen.scss";

const AgeScreen = () => {
  const [fade, setFade] = useState({
    reset: false,
    reverse: false,
  });
  const fadeFromUp = useSpring({
    from: {
      marginTop: -200,
      opacity: 0,
      visibility: "visible",
    },
    to: {
      marginTop: 0,
      opacity: 1,
      visibility: "visible",
    },
    config: {
      duration: 200,
    },
    reset: fade.reset,
    reverse: fade.reverse,
    delay: 200,
  });

  const fadeDown = useSpring({
    from: {
      marginTop: 400,
      opacity: 0,
      visibility: "hidden",
    },
    to: {
      marginTop: 0,
      opacity: 1,
      visibility: "visible",
    },
    config: {
      duration: 200,
    },
    reset: fade.reset,
    reverse: fade.reverse,
    delay: 100,
  });

  const handleConfirmClick = () => {
    setFade({
      reset: true,
      reverse: true,
    });
  };

  return (
    <div className="age-screen">
      <div className="age-text">
        <animated.div style={fadeFromUp} className="age-text__question">
          ARE YOU OVER <br />
          18 YEARS OLD
        </animated.div>

        <animated.div style={fadeDown} className="age-text__answer">
        <DelayLink to='approved' delay={700} replace={false}>
          <div
            className="age-text__answer__item age-text__answer__confirm"
            onClick={handleConfirmClick}
          >
            IM 18+
            <span class="Mask">
              <span>IM 18+</span>
            </span>
            <span class="Mask">
              <span>IM 18+</span>
            </span>
          </div>
          </DelayLink>
          <DelayLink to='denied' delay={700} replace={false}>
          <div
            className="age-text__answer__item age-text__answer__deny"
            onClick={handleConfirmClick}
          >
            NO
            <span class="Mask">
              <span>NO</span>
            </span>
            <span class="Mask">
              <span>NO</span>
            </span>
          </div>
          </DelayLink>
        
        </animated.div>
      </div>
    </div>
  );
};

export default AgeScreen;
