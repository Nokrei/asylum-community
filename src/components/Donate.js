import React from "react";
import pill from '../images/pill.png'
import "./Donate.scss";
const Donate = (props) => {
  return (
    <a href="https://www.buymeacoffee.com/Asylum669" rel="noreferrer noopener" target='_blank'>
      <div style={props.style} className="donate white-font">
      <img className='pill' src={pill}/>
      <p>Support your favourite Asylum with a refill </p>
      <img className='pill' src={pill}/>
      </div>
      
    </a>
  );
};

export default Donate;
