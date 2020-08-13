import React from "react";
import "./css/Header.css";
import Grid from "@material-ui/core/Grid";
import header1 from "../assets/img/header1.png";
import { TextField, Button } from "@material-ui/core";

export default function Header() {
  return (
    <div className="row">
      <div className="col-12 col-md-6 d-flex flex-column justify-content-around p-5">
        <h1>Descubre y comparte nuevos lugares</h1>
        <TextField label="Busca un lugar" variant="outlined" />
        <Button variant="contained" color="primary" size="large" className="mt-3">
          Explorar
        </Button>
      </div>
      <div className="col-12 col-md-6">
        <img src={header1} alt="headerimage" style={{ maxWidth: "100%" }} />
      </div>
    </div>
  );
}
