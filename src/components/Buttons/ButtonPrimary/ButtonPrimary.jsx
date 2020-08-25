// import react components
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// import style
import "./ButtonPrimary.scss";

const ButtonPrimary = (props) => {
  const { linkUrl, linkTitle, linkText, linkFullWidth, isButton, buttonEvent } = props;

  if (isButton) {
    return (
      <button
        type="button"
        title={linkTitle}
        className={`lc-button__primary ${linkFullWidth ? "lc-button__full-width" : ""}`}
        onClick={buttonEvent}
      >
        {linkText}
      </button>
    );
  }

  return (
    <Link
      to={linkUrl}
      title={linkTitle}
      className={`lc-button__primary ${linkFullWidth ? "lc-button__full-width" : ""}`}
    >
      {linkText}
    </Link>
  );
};

// prop types
ButtonPrimary.defaultProps = {
  linkUrl: "/",
  linkTitle: "Link title",
  linkText: "Link title",
  linkFullWidth: false,
  isButton: false,
  buttonEvent: () => {}
};

ButtonPrimary.propTypes = {
  linkUrl: PropTypes.string,
  linkTitle: PropTypes.string,
  linkText: PropTypes.string,
  linkFullWidth: PropTypes.bool,
  isButton: PropTypes.bool,
  buttonEvent: PropTypes.func
};

export default ButtonPrimary;
