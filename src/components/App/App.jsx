// import react packages
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import components
import Home from "../Views/Home/Home";
import Products from "../Views/Products/Products";
import ProductSingle from "../Views/ProductSingle/ProductSingle";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/item" component={ProductSingle} />
      </Switch>
    </Router>
  );
};

export default App;
