import React from "react";
import "./App.css";
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "./routes";
import AuthContextProvider from './context/AuthContext';

export default function App() {
  return (
    <div className="container">
      <Nav className="mb-4" />
      <Router>
        <AuthContextProvider>
          <Switch>
            <Routes />
          </Switch>
        </AuthContextProvider>
      </Router>
    </div>
  );
}
