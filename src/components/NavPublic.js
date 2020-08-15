import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

export default function NavPublic() {
  return (
    <ul className="navbar-nav mr-auto d-flex align-items-center">
      <li className="nav-item active">
        <Link className="nav-link" to="/">
          Inicio
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" to="/">
          Acerca de
        </a>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          <Button color="primary" variant="outlined">
            Ingresa
          </Button>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/register">
          <Button color="primary" variant="contained">
            Registrate
          </Button>
        </Link>
      </li>
    </ul>
  );
}
