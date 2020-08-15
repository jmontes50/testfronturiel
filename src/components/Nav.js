import React, { Fragment, useState, useEffect, useContext } from "react";
import logo from "../assets/img/logo.png";
import "./css/Nav.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import NavPublic from "./NavPublic";
import NavLogged from "./NavLogged";

export default function Nav() {
  const { user, token } = useContext(AuthContext);
  const [logged, setLogged] =  useState(false)

  const checkLogged = () => {
    if (token !== null) {
      setLogged(true)
    }
  };

  useEffect(() => {
    checkLogged();
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-light navmenu">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mr-auto"></div>
          <div className="form-inline my-2 my-lg-0">
            {logged ? (<NavLogged bye={setLogged}/>) : (<NavPublic/>)}
            
          </div>
        </div>
      </div>
    </nav>
  );
}
