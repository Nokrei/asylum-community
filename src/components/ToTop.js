import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import './App.scss'
import "./ToTop.scss";
const ToTop = (props) => {
  return (
    <Link to="/main#home">
      <div style={props.style} className="to-top ">
        ^
      </div>{" "}
    </Link>
  );
};

export default ToTop;
