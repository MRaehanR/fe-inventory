import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Home from "./containers/Home";
import Inventory from "./containers/Inventory";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/inventory">
            <Inventory/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
