import React from 'react';
import './App.css';
import Banner from "./Banner";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/list">
            <Nav />
          </Route>
          <Route path="/login">
            <Nav />
            <Login />
          </Route>
          <Route path="/">
            <Nav />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
