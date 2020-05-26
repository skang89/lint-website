// import react packages
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import components
import Home from "../Views/Home/Home";
import Type from "../Views/Type/Type";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/type" component={Type} />
      </Switch>
    </Router>
  );
};

export default App;
