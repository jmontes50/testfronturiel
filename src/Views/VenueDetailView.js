import React, { Fragment, useState } from "react";
// import Iframe from "react-iframe";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import Rating from '@material-ui/lab/Rating';

export default function VenueDetailView(props) {
  const venueData = { ...props.location.state };
  const [stars, setStars] = useState(0);
  // const venueUrl = `https://maps.google.com/?ll=${venueData.latitude},${venueData.longitude}&q=${venueData.name}&z=12&t=m&output=embed`
  return (
    <div>
      <h2>
        <i className="fas fa-map-marker-alt mr-2"></i> Añadir a favoritos a:{" "}
        {venueData.name}
      </h2>
      <div className="row">
        <div className="col-6 p-5 d-flex justify-content-center align-items-center text-light">
          <div
            className="card w-100 h-100 d-flex justify-content-center align-items-center"
            style={{ backgroundColor: "#FB8F1D", borderRadius: "10px" }}
          >
            <h3>Información</h3>
            <ul
              style={{
                listStyle: "none",
                lineHeight: "30px",
                fontSize: "20px",
              }}
            >
              {venueData.address !== undefined ? (
                <Fragment>
                  <li>
                    <span style={{ fontWeight: "bold" }}>Dirección: </span>
                    {venueData.address}
                  </li>
                </Fragment>
              ) : null}
              {venueData.country !== undefined ? (
                <Fragment>
                  <li>
                    <span style={{ fontWeight: "bold" }}>País: </span>
                    {venueData.country}
                  </li>
                </Fragment>
              ) : null}
              {venueData.city !== undefined ? (
                <Fragment>
                  <li>
                    <span style={{ fontWeight: "bold" }}>Ciudad: </span>
                    {venueData.city}
                  </li>
                </Fragment>
              ) : null}
              {venueData.state !== undefined ? (
                <Fragment>
                  <li>
                    <span style={{ fontWeight: "bold" }}>Estado: </span>
                    {venueData.state}
                  </li>
                </Fragment>
              ) : null}
              {venueData.distance !== undefined ? (
                <Fragment>
                  <li>
                    <span style={{ fontWeight: "bold" }}>Distancia: </span>
                    {venueData.distance}
                  </li>
                </Fragment>
              ) : null}
            </ul>
          </div>
        </div>
        <div className="col-6 p-5">
          <Map
            center={[venueData.latitude, venueData.longitude]}
            zoom={9}
            className="leaflet"
            style={{ borderRadius: "10px" }}
          >
            <Marker position={[venueData.latitude, venueData.longitude]}>
              <Popup>
                <span>{venueData.name}</span>
              </Popup>
            </Marker>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />
          </Map>
          {/* <Iframe
            url={venueUrl}
            width="100%"
            height="550rem"
            frameborder="0"
            style={{ border: "0" }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex=
            "0"
          /> */}
        </div>
      </div>
      <h3>Agregar Información:</h3>
      <div>
        <form>
          <input type="file" />
          <Rating
          name="simple-controlled"
          value={stars}
          onChange={(event, newValue) => {
            setStars(newValue);
          }}
        />
        </form>
      </div>
    </div>
  );
}
