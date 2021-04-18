import React, { useState } from "react";
import DelayLink from "react-delay-link";
import { useSpring, animated, config } from "react-spring";
import './App.scss'
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
    delay: 100,
  });

  const fadeDown = useSpring({
    from: {
      marginTop: 200,
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
    delay: 200,
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
          ARE YOU 18 YEARS
          <br />
          OR OLDER
        </animated.div>

        <animated.div style={fadeDown} className="age-text__answer accent-font">
          <DelayLink to="approved" delay={700} replace={false}>
            <div
              className="age-text__answer__item age-text__answer__confirm"
              onClick={handleConfirmClick}
            >
              YES
              <span className="Mask">
                <span>YES</span>
              </span>
              <span className="Mask">
                <span>YES</span>
              </span>
            </div>
          </DelayLink>
          <DelayLink to="denied" delay={700} replace={false}>
            <div
              className="age-text__answer__item2 age-text__answer__deny "
              onClick={handleConfirmClick}
            >
              NO
              <span className="Mask2">
                <span>NO</span>
              </span>
              <span className="Mask2">
                <span>NO</span>
              </span>
            </div>
          </DelayLink>
        </animated.div>
      </div>
      <p style={{ position: "absolute", textDecoration: "none" }}>
        Stock videos by{" "}
        <a
          style={{ color: "inherit", textDecoration: "inherit" }}
          href="http://www.videezy.com/"
        >
          Videezy
        </a>
      </p>
    </div>
  );
};

export default AgeScreen;
