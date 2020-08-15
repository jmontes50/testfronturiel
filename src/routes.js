import React, { Fragment, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import LoginView from "./Views/LoginView";
import HomeView from "./Views/HomeView";
import VenuesView from "./Views/VenuesView";
import VenuesDetailView from "./Views/VenueDetailView";
import ProfileContainer from "./Views/ProfileContainer";
import RegisterView from "./Views/RegisterView";
import { AuthContext } from "./context/AuthContext";

function Routes() {
  const { token } = useContext(AuthContext);
  return (
    <Fragment>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/login" component={LoginView} />
      <Route exact path="/register" component={RegisterView} />
      <Route exact path="/venues/:venue" component={VenuesView} />
      <Route exact path="/profile" component={ProfileContainer} />
      <Route
        exact
        path="/detailvenue/"
        component={VenuesDetailView}
      />
    </Fragment>
  );
}

export default Routes;
