import React from "react";
import './css/Header.css';
import Grid from "@material-ui/core/Grid";
import header1 from "../assets/img/header1.png";
import { TextField, Button } from "@material-ui/core";

export default function Header() {
  return (
    <Grid container spacing={6}>
      <Grid item xs={6} className='slogan'>
        <h1>Descubre y comparte nuevos lugares</h1>
        <TextField label="Busca un lugar" variant="outlined" />
        <Button variant="contained" color="primary" size='large'>
          Explorar
        </Button>
      </Grid>
      <Grid item xs={6}>
        <img src={header1} alt="headerimage" style={{ maxWidth: "100%" }} />
      </Grid>
    </Grid>
  );
}
