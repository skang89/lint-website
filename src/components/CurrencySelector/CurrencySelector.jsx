// import react components
import React from "react";
import { Link } from "react-router-dom";

// import style
import "./CurrencySelector.scss";

const CurrencySelector = () => {
  return (
    <Link className="lc-button__currency">
      <span className="lc-type__header__h1 lc-type__header__h1--bold">£</span>
    </Link>
  );
};

export default CurrencySelector;
