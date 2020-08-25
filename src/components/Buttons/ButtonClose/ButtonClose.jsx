// import react components
import React from "react";
import PropTypes from "prop-types";

// import style
import "./ButtonClose.scss";

const ButtonClose = (props) => {
  const { buttonEvent } = props;

  return (
    <button
      type="button"
      title="close currency menu"
      className="lc-button__close"
      onClick={buttonEvent}
    >
      <span className="lc-button__close__line"></span>
      <span className="lc-button__close__line"></span>
    </button>
  );
};

// prop types
ButtonClose.defaultProps = {
  buttonEvent: () => {}
};

ButtonClose.propTypes = {
  buttonEvent: PropTypes.func
};

export default ButtonClose;
