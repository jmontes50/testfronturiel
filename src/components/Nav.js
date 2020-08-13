import React, { Fragment, useState } from "react";
import { Button } from "@material-ui/core";
import logo from "../assets/img/logo.png";
import './css/Nav.css';
import {Link} from 'react-router-dom';

export default function Nav() {


  return (
    <nav className="navmenu">
      <img src={logo} />
      <div>
        <ul>
          <li>
            <span>Inicio</span>
          </li>
          <li>
            <span>Categorias</span>
          </li>
          <li>
            <span>Acerca de</span>
          </li>
        </ul>
        <Button color="primary" variant="outlined">
          Ingresa
        </Button>
        <Button color="primary" variant="contained">
          Registrate
        </Button>
      </div>
    </nav>
  );
}
