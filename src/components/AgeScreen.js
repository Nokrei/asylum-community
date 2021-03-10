import React from "react";
import "./AgeScreen.scss";

const AgeScreen = () => {
  return (
    <div className="age-screen">
      <video autoPlay muted loop className="background-vid">
        <source
          src="https://cdn.videvo.net/videvo_files/video/free/2013-09/small_watermarked/OMSBG5_preview.webm"
          type="video/mp4"
        />
      </video>
      <div className="top-text">Asylum 669</div>
      <div className="age-text">
        <div className="age-text__question">
          ARE YOU OVER <br />
          18 YEARS OLD
        </div>
        <div className="age-text__answer">
          <div className="age-text__answer__item age-text__answer__confirm">
            IM 18+
            <span class="Mask">
              <span>IM 18+</span>
            </span>
            <span class="Mask">
              <span>IM 18+</span>
            </span>
          </div>
          <div className="age-text__answer__item age-text__answer__deny">
            NO
            <span class="Mask">
              <span>NO</span>
            </span>
            <span class="Mask">
              <span>NO</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeScreen;
