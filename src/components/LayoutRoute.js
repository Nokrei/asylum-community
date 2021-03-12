import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./AgeScreen.scss";

const LayoutRoute = (props) => {
    return (
<React.Fragment>
<video autoPlay muted loop className="background-vid">
        <source
          src="https://cdn.videvo.net/videvo_files/video/free/2013-09/small_watermarked/OMSBG5_preview.webm"
          type="video/mp4"
        />
      </video>
      <div className="top-text">Asylum 669</div>
      <Route path ={props.path} exact = {props.exact} component={props.component} />
</React.Fragment>
    )
}

export default LayoutRoute