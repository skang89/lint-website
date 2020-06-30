// import react packages
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import components
import Home from "../Views/Home/Home";
import Products from "../Views/Products/Products";
import ProductSingle from "../Views/ProductSingle/ProductSingle";
import Basket from "../Views/Basket/Basket";
import OurStory from "../Views/OurStory/OurStory";
import Login from "../Views/Login/Login";
import Orders from "../Views/Orders/Orders";
import Favourites from "../Views/Favourites/Favourites";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/item" component={ProductSingle} />
        <Route exact path="/basket" component={Basket} />
        <Route exact path="/our-story" component={OurStory} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/account/orders" component={Orders} />
        <Route exact path="/account/favourites" component={Favourites} />
      </Switch>
    </Router>
  );
};

export default App;
