// import react packages
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import components
import Home from "../Views/Home/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
