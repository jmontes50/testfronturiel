import React, { useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import { loginUser } from "../services/userService";
import {AuthContext} from '../context/AuthContext';

export default function LoginView(props) {

  const {setAuthToken} = useContext(AuthContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const Loguear = async () => {
    const data = await loginUser(user, props);
    if (data) {
      console.log("Token Got -> " + data.token);
      console.log("User Got -> " + data.user.email);
      setAuthToken(data.token, data.user);
  }
  }

  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <div className="card mt-4 w-50">
        <div className="card-body">
          <h5 className="card-title">Login</h5>
          <div className="card-text d-flex ">
            <TextField label="email" variant="outlined" onChange={(e)=>{setUser({...user, email:e.target.value})}}/>
            <TextField label="password" type="password" variant="outlined" onChange={(e)=>{setUser({...user, password:e.target.value})}}/>
          </div>
          <Button variant="contained" color="primary" className="mt-3" onClick={()=>{Loguear()}}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
