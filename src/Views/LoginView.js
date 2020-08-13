import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { loginUser } from "../services/userService";

export default function LoginView(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const Loguear = async () => {
    const data = await loginUser(user, props);
    console.log(data)
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
