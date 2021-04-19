import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import AsylumLogo from "../images/Asylum_Neon.png";
import useWindowDimensions from "../utils/useWindowDimensions";
import "./Layout.scss";
const LayoutRoute = (props) => {
  // Get vievport width.
  const { width } = useWindowDimensions();

  // State variable for setting autoPlay on background video.
  const [autoPlay, setAutoPlay] = useState(false);

  // Don't autoPlay the video if on mobile
  useEffect(() => {
    width > 1000 ? setAutoPlay(true) : setAutoPlay(false);
  }, []);

  return (
    <div className="layout">
      <video autoPlay={autoPlay} muted loop className="background-vid">
        <source
          src="https://static.videezy.com/system/resources/previews/000/038/701/original/stockvideo_01785.mp4"
          type="video/mp4"
        />
      </video>
      <div className="top-text">
        <img className="top-logo" alt='logo' src={AsylumLogo} />
      </div>
      <CookieConsent >
            This website uses cookies to enhance the user experience.
          </CookieConsent>
      <Route
        path={props.path}
        exact={props.exact}
        component={props.component}
      />
    </div>
  );
};

export default LayoutRoute;
