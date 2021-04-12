import React from "react";
import "./App.scss";
import "./Join.scss";
const Join = () => {
  return (
    <div className="join" id="join">
      <div className="join__title blue-font creepy-font">
        <h1>Join us</h1>
      </div>
      <div className="join__content white-font">
        What are you waiting for gamers? Join us now through
        <a
          href="https://discord.gg/asylum669"
          target="blank"
          rel=">noreferrer noopener"
        >
          {" "}
          https://discord.gg/asylum669{" "}
        </a>
      </div>
      <iframe
        src="https://discord.com/widget?id=578264670805426245&theme=dark"
        width="350"
        height="500"
        allowtransparency="true"
        frameborder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      ></iframe>
    </div>
  );
};

export default Join;
