import React from "react";
import "./App.css";
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "./routes";

export default function App() {
  return (
    <div className="container">
      <Nav className="mb-4"/>
      <Router>
        <Switch>
          <Routes />
        </Switch>
      </Router>
    </div>
  );
}
