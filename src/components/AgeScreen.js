import React, { useState } from "react";
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
    },
    to: {
      marginTop: 0,
      opacity: 1,
    },
    config: {
      duration: 200,
    },
    reset: fade.reset,
    reverse: fade.reverse,
    delay:200
  });

  const fadeDown = useSpring({
    from: {
      marginTop: 400,
      opacity: 0,
    },
    to: {
      marginTop: 0,
      opacity: 1,
    },
    config: {
      duration: 200,
    },
    reset: fade.reset,
    reverse: fade.reverse,
    delay:100
  });

  const handleConfirmClick = () => {
    setFade({
      reset: true,
      reverse: true,
    });
  };

  return (
    <div className="age-screen">
      <video autoPlay muted loop className="background-vid">
        <source
          src="https://cdn.videvo.net/videvo_files/video/free/2013-09/small_watermarked/OMSBG5_preview.webm"
          type="video/mp4"
        />
      </video>
      <div className="top-text">Asylum 669</div>
      <div className="age-text">
        <animated.div style={fadeFromUp} className="age-text__question">
          ARE YOU OVER <br />
          18 YEARS OLD
        </animated.div>

        <animated.div style={fadeDown} className="age-text__answer">
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
        </animated.div>
      </div>
    </div>
  );
};

export default AgeScreen;
