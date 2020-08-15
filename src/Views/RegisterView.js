import React, { useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import { registerUser } from "../services/userService";
import { AuthContext } from "../context/AuthContext";

export default function RegisterView(props) {
  const { setAuthToken } = useContext(AuthContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
    firstName:"",
    lastName:"",
    country:""
  });

  const registrar = async () => {
    const data = await registerUser(user, props);
    if (data) {
      console.log("User Got -> " + data.user.email);
      // setAuthToken(data.token, data.user);
    }
  };

  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <div className="card mt-4 w-50">
        <div className="card-body">
          <h5 className="card-title mb-4">Registro</h5>
          <div className="card-text d-flex flex-column">
            <TextField
              label="Nombres"
              type="text"
              variant="outlined"
              onChange={(e) => {
                setUser({ ...user, firstName: e.target.value });
              }}
              className="mb-2"
            />
            <TextField
              label="Apellidos"
              type="text"
              variant="outlined"
              onChange={(e) => {
                setUser({ ...user, lastName: e.target.value });
              }}
              className="mb-2"
            />
<TextField
              label="País"
              type="text"
              variant="outlined"
              onChange={(e) => {
                setUser({ ...user, country: e.target.value });
              }}
              className="mb-2"
            />
            <TextField
              label="email"
              variant="outlined"
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
              className="mb-2"
            />
            <TextField
              label="password"
              type="password"
              variant="outlined"
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
              className="mb-2"
            />
            
          </div>
          <Button
            variant="contained"
            color="primary"
            className="mt-3"
            onClick={() => {
              registrar();
            }}
            size="large"
          >
            Registrate
          </Button>
        </div>
      </div>
    </div>
  );
}
