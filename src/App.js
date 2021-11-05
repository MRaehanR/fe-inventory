import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./containers/Home";
import Inventory from "./containers/Inventory";
import Anggota from "./containers/Anggota";
import NavbarComp from "./components/NavbarComp";

function App() {
  return (
    <>
      <NavbarComp />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/inventory">
            <Inventory />
          </Route>
          <Route path="/anggota">
            <Anggota />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
