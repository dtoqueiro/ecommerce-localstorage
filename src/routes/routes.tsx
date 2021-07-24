import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
// import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Person from "../pages/Person";

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      {/* <Switch>
        <Route path="/cart" component={Cart} />
      </Switch> */}
      <Switch>
        <Route path="/person" component={Person} />
      </Switch>
    </Router>
  );
};
export default Routes;
