// import react components
import React from "react";

// import style
import "./CurrencySelector.scss";

const CurrencySelector = () => {
  return (
    <button type="button" title="Selected currency: £" className="lc-button__currency">
      <span className="lc-type__header__h1 lc-type__header__h1--bold">£</span>
    </button>
  );
};

export default CurrencySelector;
