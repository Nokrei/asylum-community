import React from "react";
import Footer from "./Footer";
import redBubble from "../images/red-bubble.png";
import "./App.scss";
import "./Merchandise.scss";

const Merchandise = () => {
  return (
    <div className="merchandise">
      <div className="red-bubble-container-outer">
        <div className="red-bubble-container">
          <p class="white-font">
            Check out our merchandise at
            <a
              href="https://www.redbubble.com/shop/ap/97972062"
              rel="noreferrer noopener"
              target="_blank"
              className="accent-font"
            >
              Red Bubble!
            </a>{" "}
          </p>
          <a
            href="https://www.redbubble.com/shop/ap/97972062"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img
              className="red-bubble-image"
              src={redBubble}
              alt="Asylum 669 red bubble"
            />
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Merchandise;
