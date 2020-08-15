import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { useHistory } from 'react-router-dom';

export default function Venue({
  name,
  address,
  country,
  city,
  state,
  distance,
  latitude,
  longitude,
}) {
  const { user, token } = useContext(AuthContext);

  const history = useHistory();

  const denegado = () => {
    Swal.fire({
      icon: "error",
      title: "No esta logueado!",
      showConfirmButton: false,
      timer: 2000,
    }).then(() => {
     return history.push('/login');
    });
  }

  return (
    <div className="col-4 mb-4">
      <div
        className="card"
        style={{ width: "18rem", minHeight: "450px", fontFamily: "Mulish" }}
      >
        <img
          className="card-img-top"
          src="https://images.unsplash.com/photo-1495562569060-2eec283d3391?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title" style={{ fontWeight: "bold" }}>
            {name}
          </h5>
          <ul style={{ listStyle: "none" }}>
            {address !== undefined ? (
              <Fragment>
                <li>
                  <span style={{ fontWeight: "bold" }}>Dirección: </span>
                  {address}
                </li>
              </Fragment>
            ) : null}
            {country !== undefined ? (
              <Fragment>
                <li>
                  <span style={{ fontWeight: "bold" }}>País: </span>
                  {country}
                </li>
              </Fragment>
            ) : null}
            {city !== undefined ? (
              <Fragment>
                <li>
                  <span style={{ fontWeight: "bold" }}>Ciudad: </span>
                  {city}
                </li>
              </Fragment>
            ) : null}
            {state !== undefined ? (
              <Fragment>
                <li>
                  <span style={{ fontWeight: "bold" }}>Estado: </span>
                  {state}
                </li>
              </Fragment>
            ) : null}
            {distance !== undefined ? (
              <Fragment>
                <li>
                  <span style={{ fontWeight: "bold" }}>Distancia: </span>
                  {distance}
                </li>
              </Fragment>
            ) : null}
          </ul>
        </div>
        <div className="card-footer d-flex justify-content-center">
          {user !== null ? (
            <Link
              to={{
                pathname: "/detailvenue",
                state: {
                  name,
                  address,
                  country,
                  city,
                  state,
                  distance,
                  latitude,
                  longitude,
                },
              }}
              // className="btn btn-success"
              // style={{backgroundColor:'#1ABE84'}}
            >
              <Button variant="contained" color="secondary" size="large">
                <i className="fas fa-heart" style={{ color: "white" }}></i>{" "}
                Añadir a Favoritos
              </Button>
            </Link>
          ) : (
            <Button variant="contained" color="default" size="large" onClick={() => {denegado()}}>
              <i className="fas fa-heart" style={{ color: "white" }}></i> Añadir
              a Favoritos
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
