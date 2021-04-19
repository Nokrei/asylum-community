import React from "react";
import "./App.scss";
import "./Home.scss";
const Home = (props) => {
  return (
    <div id="home" className="home-text__container">
      <div
        style={props.style}
        className="creepy-font home-text__big"
      >
        <span>
          Join The <br/> Madness
        </span>
      </div>
    </div>
  );
};

export default Home;
