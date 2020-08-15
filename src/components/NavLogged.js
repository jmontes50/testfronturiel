import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from 'react-router-dom';
import Swal from "sweetalert2";

export default function NavLogged({bye}) {
  const { removeToken, token } = useContext(AuthContext);
  const history = useHistory();
  const logout = () => {
    bye(false);
    removeToken(token);
  };

  const alertalogout = () => {
    logout();
    Swal.fire({
      icon: "success",
      title: "Nos vemos!",
      showConfirmButton: false,
      timer: 2000,
    }).then(() => {
     return history.push('/');
    });
  }

  return (
    <ul className="navbar-nav mr-auto d-flex align-items-center">
      <li className="nav-item active">
        <Link className="nav-link" to="/">
          Inicio
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/profile">
          Mi Perfil
        </Link>
      </li>
      <li className="nav-item">
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            alertalogout()
          }}
        >
          Cerrar Sesión
        </Button>
      </li>
    </ul>
  );
}
