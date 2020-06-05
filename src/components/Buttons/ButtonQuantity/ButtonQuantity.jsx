// import react components
import React from "react";
import PropTypes from "prop-types";

// import style
import "./ButtonQuantity.scss";

const Quantity = (props) => {
  const { label } = props;

  return (
    <form className="lc-quantity" method="post" action="">
      <div>
        <label htmlFor="quantity">{label}</label>
      </div>
      <div>
        <button className="lc-quantity__button" id="decrease" value="Decrease Quantity">
          -
        </button>
        <input type="number" id="quantity" value="1" />
        <button className="lc-quantity__button" id="increase" value="Increase Quantity">
          +
        </button>
      </div>
    </form>
  );
};

// prop types
Quantity.defaultProps = {
  label: "Quantity"
};

Quantity.propTypes = {
  label: PropTypes.string
};

export default Quantity;
