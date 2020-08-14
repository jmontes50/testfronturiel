import React, { useState, useEffect } from "react";
import "./css/Header.css";
import axios from "axios";
import { Link } from "react-router-dom";
import header1 from "../assets/img/header1.png";
import { TextField, Button } from "@material-ui/core";

export default function Header() {
  const [venue, setVenue] = useState("");

  return (
    <div className="row">
      <div className="col-12 col-md-6 d-flex flex-column justify-content-around p-5">
        <h1>Descubre y comparte nuevos lugares</h1>
        <TextField
          label="Descubre un lugar"
          variant="outlined"
          value={venue}
          onChange={(e) => {
            setVenue(e.target.value);
          }}
        />
        <Link to={`/venues/${venue}`} className="w-100">
          <Button
            variant="contained"
            color="primary"
            size="large"
            className="mt-3"
            //   onClick={() => {
            //     searchVenues();
            //   }}
          >
            Explorar
          </Button>
        </Link>
      </div>
      <div className="col-12 col-md-6">
        <img src={header1} alt="headerimage" style={{ maxWidth: "100%" }} />
      </div>
    </div>
  );
}
