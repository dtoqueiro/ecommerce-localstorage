import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/Home";

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};
export default Routes;
