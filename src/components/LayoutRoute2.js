import React, { useState, useContext } from "react";
import { Route } from "react-router-dom";
import { debounce } from "../utils/helpers";
import AppContext from "./AppContext";
import NavBar from "./NavBar";
import ToTop from "./ToTop";
const LayoutRoute2 = (props) => {
  // Global state to get scroll position for navBar and ToTop animations.
  const [globalState, setGlobalState] = useContext(AppContext);



  return (
    <div className="layout2">
      <NavBar
        style={{
          top: globalState.visible ? "0" : "-200px",
          transition: "top 0.6s",
        }}
      />
   
      <Route
        path={props.path}
        exact={props.exact}
        component={props.component}
      />
    </div>
  );
};

export default LayoutRoute2;
