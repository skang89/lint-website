// import react components
import React from "react";

// import style
import "./ButtonPlusMinus.scss";

const ButtonPlusMinus = () => {
  return (
    <form className="lc-basket-quantity" method="post" action="">
      <button
        className="lc-basket-quantity__button"
        id="decrease"
        value="Decrease Quantity"
      >
        -
      </button>
      <input type="number" id="quantity" value="1" />
      <button
        className="lc-basket-quantity__button"
        id="increase"
        value="Increase Quantity"
      >
        +
      </button>
    </form>
  );
};

export default ButtonPlusMinus;
