import React, { useState, useContext, Fragment } from "react";
import { TextField, Button } from "@material-ui/core";
import { loginUser } from "../services/userService";
import { AuthContext } from "../context/AuthContext";
import Loading from "../components/Loading";

export default function LoginView(props) {
  const { setAuthToken } = useContext(AuthContext);
  const { loading, setLoading } = useState(false);
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
  };

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <div className="d-flex justify-content-center flex-column align-items-center">
          <div className="card mt-4 w-50">
            <div className="card-body">
              <h5 className="card-title mb-4">Login</h5>
              <div className="card-text d-flex flex-column">
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
                />
              </div>
              <Button
                variant="contained"
                color="primary"
                className="mt-3"
                onClick={() => {
                  Loguear();
                }}
                size="large"
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
