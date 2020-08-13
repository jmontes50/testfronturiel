import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import LoginView from "./Views/LoginView";
import HomeView from './Views/HomeView'
function Routes() {
  return (
    <Fragment>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/login" component={LoginView} />
    </Fragment>
  );
}

export default Routes;
