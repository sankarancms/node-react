import React from "react";
import { Route, Switch } from "react-router-dom";

import Channels from "./pages/Channels";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Channels} />
        <Route exact path="/channels" component={Channels} />
        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
