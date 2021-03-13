import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter,
  HashRouter,
  Redirect,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import AppContext from "./AppContext";
import LayoutRoute from "./LayoutRoute";
import "./App.scss";
import AgeScreen from "./AgeScreen";
import DenyEntry from "./DenyEntry";
import ApproveEntry from "./ApproveEntry";

function App() {
  return (
    <HashRouter>
      <Switch>
        <LayoutRoute path="/" exact={true} component={AgeScreen} />
        <LayoutRoute path="/denied" exact={true} component={DenyEntry} />
        <LayoutRoute path="/approved" exact={true} component={ApproveEntry} />
      </Switch>
    </HashRouter>
  );
}

export default App;
