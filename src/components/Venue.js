import React from "react";

export default function Venue({ name, address, city, state, distance }) {
  return (
    <div className="card" style="width: 18rem;">
      <img className="card-img-top" src="..." alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <ul>
          <li>{address}</li>
          <li>{city}</li>
          <li>{state}</li>
          <li>{distance}</li>
          <li>{address}</li>
        </ul>
        <a href="#" className="btn btn-primary">
          Like
        </a>
      </div>
    </div>
  );
}
