import React, { useState } from "react";
import { HashRouter, Switch } from "react-router-dom";
import AppContext from "./AppContext";
import LayoutRoute from "./LayoutRoute";
import LayoutRoute2 from "./LayoutRoute2";
import "./App.scss";
import AgeScreen from "./AgeScreen";
import DenyEntry from "./DenyEntry";
import ApproveEntry from "./ApproveEntry";
import MainScreen from "./MainScreen";
import Merchandise from "./Merchandise";

function App() {
  const [globalState, setGlobalState] = useState({
    changeLaout: false,
    scrollPosition: 0,
    isAdult: false,
    visible: true,
  });

  return (
    <div className="App">
      <AppContext.Provider value={[globalState, setGlobalState]}>
        <HashRouter>
          <Switch>
            <LayoutRoute path="/" exact={true} component={AgeScreen} />
            <LayoutRoute path="/denied" exact={true} component={DenyEntry} />
            <LayoutRoute
              path="/approved"
              exact={true}
              component={ApproveEntry}
            />
            <LayoutRoute2 path="/main" exact={true} component={MainScreen} />
            <LayoutRoute2
              path="/merchandise"
              exact={true}
              component={Merchandise}
            />
          </Switch>
        </HashRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
