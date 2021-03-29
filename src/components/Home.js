import React, { useState, useEffect } from "react";
import "./App.scss";
import "./Home.scss";
const Home = (props) => {
  // State variables to store mouse position.
  const [mousePosition, setMousePosition] = useState({
    positionY: 0,
    positionX: 0,
  });

  // Get mouse position from client.
  const handleMouseMove = (e) => {
    setMousePosition({
      positionY: e.clientY,
      positionX: e.clientX,
    });
  };

  // Assign values of mouse position to styling variables.
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--x",
      mousePosition.positionX + "px"
    );
    document.documentElement.style.setProperty(
      "--y",
      mousePosition.positionY + "px"
    );
    //  console.log(mousePosition);
  }, [mousePosition]);

  return (
    <div className="home-text__container">
      <div style={props.style} className=" white-font creepy-font home-text__big mask">
        join the <br /> madness
      </div>
    </div>
  );
};

export default Home;
