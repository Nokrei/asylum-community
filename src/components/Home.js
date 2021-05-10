import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import mascot from "../images/mascot.png";
import "./App.scss";
import "./Home.scss";
const Home = (props) => {
  return (
    <div id="home" className="home-text__container">
      <div style={props.style} className="creepy-font home-text__big">
        <Link className="join-link" to="/main#join">
          <span>Jo</span>i<span>n</span>
        </Link>{" "}
        The <br /> Madness
      </div>
      <div className="background-img-container">
        <img src={mascot} style={props.style} className="mascot" />
      </div>
    </div>
  );
};

export default Home;
