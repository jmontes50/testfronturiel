import React from "react";
import "./css/Header.css";
import header2 from "../assets/img/header2.png";
import { TextField, Button } from "@material-ui/core";

export default function Header2() {


  return (
    <div className="row mt-5">
      
      <div className="col-12 col-md-6">
        <img src={header2} alt="headerimage" style={{ maxWidth: "100%" }} />
      </div>
      <div className="col-12 col-md-6 d-flex flex-column justify-content-around p-5">
        <h1 className="mb-3">Una nueva manera de conocer el mundo</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices sapien id est tristique interdum. Praesent in neque et lorem imperdiet consequat pulvinar et purus. Ut hendrerit at ipsum nec gravida. Integer nec fringilla urna, at mattis risus. Nunc eleifend aliquet massa ac eleifend. Maecenas sagittis quam in vulputate egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum eget iaculis elit.
        </p>
      </div>
    </div>
  );
}
