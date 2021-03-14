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
import MainScreen from "./MainScreen";


function App() {

  const [globalState, setGlobalState] = useState({
    changeLaout: false
  })
  return (
    <AppContext.Provider value={[globalState, setGlobalState]}>
       <HashRouter>
      <Switch>
        <LayoutRoute path="/" exact={true} component={AgeScreen} logo='visible'/>
        <LayoutRoute path="/denied" exact={true} component={DenyEntry} logo='visible'/>
        <LayoutRoute path="/approved" exact={true} component={ApproveEntry} logo='visible'/>
        <LayoutRoute path="/main" exact={true} component={MainScreen} logo='hidden' />
      </Switch>
    </HashRouter>
    </AppContext.Provider>
   
  );
}

export default App;
