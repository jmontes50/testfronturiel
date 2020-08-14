import React, { useState, useEffect } from "react";
import axios from "axios";
import credentials from "../utils/credentialsFoursqueare";
import Loading from "../components/Loading";

export default function VenuesView(props) {
  const venue = props.match.params.venue;
  const [coords, setCoords] = useState({
    latitude: 0,
    longitude: 0,
  });

  const [venues, setVenues] = useState([]);

  const [loading, setLoading] = useState(true);

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
          setearCoords(position.coords.latitude, position.coords.longitude)
      })
      .catch(() => {
        const geolocationEndpoint = "https://geolocation-db.com/json/";
      axios
        .get(geolocationEndpoint)
        .then((response) =>
          setearCoords(response.data.latitude, response.data.longitude)
        )
      });
  }, []);
  
  //este es segundo, si se actualizan las coordenadas buacamos venues
  useEffect(() => {
      searchVenues();
  },[coords])

  //este es tercero, si se actualizaron las venues quitamos el loading false
  useEffect(() => {
      setLoading(false)
  },[venues])

  return <div>{loading ? <Loading /> : venues.map((venue,i) => {
      console.log("venues")
      console.log(venue)
  })}</div>;
}
