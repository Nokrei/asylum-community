import React, { useState, useEffect } from "react";
import "./App.scss";
import "./Home.scss";
const Home = () => {
  const [mousePosition, setMousePosition] = useState({
    positionY: 0,
    positionX: 0,
  });
  const handleMouseMove = (e) => {
    setMousePosition({
      positionY: e.clientY,
      positionX: e.clientX,
    });
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--x",
      mousePosition.positionX + "px"
    );
    document.documentElement.style.setProperty(
      "--y",
      mousePosition.positionY + "px"
    );
    console.log(mousePosition);
  }, [mousePosition]);

  return (
    <div className="home-text__container">
      <div onMouseMove={handleMouseMove} className="white-font home-text__big mask">
       
          We Are <br /> Asylum 699
       
      </div>
    </div>
  );
};

export default Home;
