import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./Layout.scss";
import AsylumLogo from '../images/Asylum_Neon.png'
const LayoutRoute = (props) => {
    return (
<React.Fragment>
<video autoPlay muted loop className="background-vid">
        <source
          src="https://static.videezy.com/system/resources/previews/000/038/701/original/stockvideo_01785.mp4"
          type="video/mp4"
        />
      </video>
      <div className="top-text">
        <img className='top-logo' src={AsylumLogo}/>
      </div>
      <Route path ={props.path} exact = {props.exact} component={props.component} />
</React.Fragment>
    )
}

export default LayoutRoute