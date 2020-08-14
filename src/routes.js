import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import LoginView from "./Views/LoginView";
import HomeView from './Views/HomeView'
import VenuesView from "./Views/VenuesView";

function Routes() {
  return (
    <Fragment>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/login" component={LoginView} />
      <Route exact path="/venues/:venue" component={VenuesView} />
    </Fragment>
  );
}

export default Routes;
