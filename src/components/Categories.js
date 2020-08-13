import React, {useState, useEffect} from 'react'
import credentials from '../utils/credentialsFoursqueare';
import axios from 'axios';

export default function Categories() {
    const [venues, setVenues] = useState(null);

    const searchVenues = (latitud, longitud, venue) => {
        const searchEndpoint = `https://api.foursquare.com/v2/venues/search?v=20200715&client_id=${credentials.key}&client_secret=${credentials.secret}&ll=${latitud},${longitud}&llAcc=10000.0&query=${venue}&limit=10`;
        axios.get(searchEndpoint)
            .then((response) => setVenues(response.data.response.venues))
            //.then((response) => console.log(response.data.response.venues))
            .catch((error) => console.log(error));
    }

    const success = (position) => {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        console.log(latitude);
        console.log(longitude);
    }

    const error = (position) => {
        console.log("No hubo geo")
    }

    const getLocation = () => {
        if (navigator) {
            /* la geolocalización está disponible */
            console.log("la geolocalización está disponible");
            navigator.geolocation.getCurrentPosition(success, error);
            
        } else {
            /* la geolocalización NO está disponible */
            console.log("la geolocalización NO está disponible");
        }
    }

    //Se ejecuta cuando inicia el container
    useEffect(() => {
        getLocation();
        //searchVenues("19.4", "-99.1", "Puebla");
    }, []);

    return (
        <main>
            {/* <InputSearch searchVenues={searchVenues} />
            {venues ? venues.map((venue) => (
                <About
                    key={venue.id}
                    id={venue.id}
                    name={venue.name}
                    address={venue.location.address}
                    city={venue.location.city}
                    state={venue.location.state}
                    distance={venue.location.distance}
                //searchVenues={searchVenues}
                />
            )) : <h1>There is not travels ;(</h1>} */}
        </main>
    )
}
