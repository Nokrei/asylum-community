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
       <span className='white-font'>Sorry</span>  <span className="accent-font">Kiddo!</span>
      </span>
      <br />
      <span className="deny-text__medium accent-font">
        This is an 18+ zone only
      </span>
      <br />
      <span className="deny-text__small white-font">
        come back when you're 18 or above
      </span>
      <br />
    </animated.div>
  );
};

export default DenyEntry;
