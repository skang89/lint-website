// import react components
import React from "react";

// import style
import "./Basket.scss";

const Basket = () => {
  return (
    <button type="button" title="Basket items: 0" className="lc-button__basket">
      <img
        src="/assets/icons/icons-header-shopping-bag-small.svg"
        alt="shopping basket"
      />
      <span className="lc-button__basket__number">0</span>
    </button>
  );
};

export default Basket;
