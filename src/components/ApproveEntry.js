import React from "react";
import { useSpring, animated, config } from "react-spring";
import "./Approve.scss";
const ApproveEntry = () => {
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
    <animated.div style={fadeIn} className="approve-text">
      <span className="white-font">
        Whalecum...
      </span>
      <br />
      <span className="approve-text__medium accent-font">
        To the dark side
      </span>
      <br />
    </animated.div>
  );
};

export default ApproveEntry;
