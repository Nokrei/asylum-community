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
  const circleOne = useSpring({
    from: {
     transform: 'scale(0)'
    },
    to: {
      transform: 'scale(250)'
    },
    config:{
      duration: 1000
    },
    delay: 1000
  })
  const circleTwo = useSpring({
    from: {
     transform: 'scale(0)'
    },
    to: {
      transform: 'scale(250)'
    },
    config:{
      duration: 1000
    },
    delay: 2000
  })
  const circleThree = useSpring({
    from: {
     transform: 'scale(0)'
    },
    to: {
      transform: 'scale(250)'
    },
    config:{
      duration: 1000
    },
    delay: 3000
  })
  return (
    <React.Fragment>
         <animated.div style={fadeIn} className="approve-text">
      <span className="white-font">
        Whalecum...
      </span>
      <br />
      <span className="approve-text__medium accent-font">
        To the dark side
      </span>
      <br />
      <div className='circle-container'>
      <animated.div style={circleOne} className='circle circle-one'></animated.div>
      <animated.div style={circleTwo} className='circle circle-two'></animated.div>
      <animated.div style={circleThree} className='circle circle-three'></animated.div>
    </div>
    </animated.div>
    
    </React.Fragment>

 
  );
};

export default ApproveEntry;
