import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import LoginView from "./Views/LoginView";
import HomeView from "./Views/HomeView";
import VenuesView from "./Views/VenuesView";
import VenuesDetailView from "./Views/VenueDetailView";

function Routes() {
  return (
    <Fragment>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/login" component={LoginView} />
      <Route exact path="/venues/:venue" component={VenuesView} />
      <Route
        exact
        path="/detailvenue/"
        component={VenuesDetailView}
      />
    </Fragment>
  );
}

export default Routes;
