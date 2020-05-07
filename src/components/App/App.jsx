// import react packages
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import components
import Home from "../Views/Home/Home";
import ThankYou from "../Views/ThankYou/ThankYou";

// import styles
import "./App.scss";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/thank-you" component={ThankYou} />
      </Switch>
    </Router>
  );
};

export default App;
