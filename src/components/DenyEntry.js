import React from "react";
import { useSpring, animated, config } from "react-spring";
import "./Deny.scss";
const DenyEntry = () => {
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
    <animated.div style={fadeIn} className="deny-text">
      <span className="deny-text__big">
        Sorry <span className="deny-text__big--colored">Kido!</span>
      </span>
      <br />
      <span className="deny-text__medium">
        This is a big boys (and girls!) club
      </span>
      <br />
      <span className="deny-text__small">
        Do come back in the future though
      </span>
      <br />
    </animated.div>
  );
};

export default DenyEntry;
