import React from "react";
import pill from "../images/pill.png";
import "./Donate.scss";
const Donate = (props) => {
  return (
    <a
      href="https://www.paypal.com/paypalme/WhyYouNoGiveMoney"
      rel="noreferrer noopener"
      target="_blank"
    >
      <div style={props.style} className="donate white-font">
        <img className="pill" src={pill} />
        <p>Support your favourite Asylum</p>
        <img className="pill" src={pill} />
      </div>
    </a>
  );
};

export default Donate;
