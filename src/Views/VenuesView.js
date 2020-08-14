import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import credentials from "../utils/credentialsFoursqueare";
import Loading from "../components/Loading";
import Venue from "../components/Venue";

export default function VenuesView(props) {
  const venue = props.match.params.venue;
  const [coords, setCoords] = useState({
    latitude: 0,
    longitude: 0,
  });

  const [venues, setVenues] = useState([]);

  const [loading, setLoading] = useState(true);

//   error curioso en la peticion {"meta":{"code":400,"errorType":"param_error","errorDetail":"Must provide parameter ll","requestId":"5f35eca931e6642aa6fb77be"},"response":{}}
  const searchVenues = () => {
    const searchEndpoint = `https://api.foursquare.com/v2/venues/search?v=20200715&client_id=${credentials.key}&client_secret=${credentials.secret}&ll=${coords.latitude},${coords.longitude}&llAcc=10000.0&query=${venue}&limit=10`;
    axios
      .get(searchEndpoint)
      .then((response) => setVenues(response.data.response.venues))
      .catch((err) => console.log(err));
  };

  const setearCoords = (latitude, longitude) => {
    setCoords({
      latitude,
      longitude,
    });
  };

  const getLocation = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  //este es primero
  useEffect(() => {
    getLocation()
      .then((position) => {
        setearCoords(position.coords.latitude, position.coords.longitude);
      })
      .catch(() => {
        const geolocationEndpoint = "https://geolocation-db.com/json/";
        axios
          .get(geolocationEndpoint)
          .then((response) =>
            setearCoords(response.data.latitude, response.data.longitude)
          );
      });
  }, []);

  //este es segundo, si se actualizan las coordenadas buacamos venues
  useEffect(() => {
    searchVenues();
  }, [coords]);

  //este es tercero, si se actualizaron las venues quitamos el loading false
  useEffect(() => {
    setLoading(false);
  }, [venues]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          <h2 className="mb-4">Lugares Encontrados al buscar '{venue}'</h2>
          <div className="row">
            {venues.map((venu, i) => (
              <Venue
                key={i}
                id={venu.id}
                name={venu.name}
                country={venu.location.country}
                city={venu.location.city}
                state={venu.location.state}
                distance={venu.location.distance}
                latitude={venu.location.lat}
                longitude={venu.location.lng}
              >
                  
              </Venue>
            ))}
          </div>
        </Fragment>
      )}
    </div>
  );
}
