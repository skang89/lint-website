// import react components
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// import style
import "./ButtonDefault.scss";

const ButtonDefault = (props) => {
  const { linkUrl, linkTitle, linkText, linkFullWidth, isButton, buttonEvent } = props;

  if (isButton) {
    return (
      <button
        type="button"
        title={linkTitle}
        className={`lc-button__default ${linkFullWidth ? "lc-button__full-width" : ""}`}
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
      className={`lc-button__default ${linkFullWidth ? "lc-button__full-width" : ""}`}
    >
      {linkText}
    </Link>
  );
};

// prop types
ButtonDefault.defaultProps = {
  linkUrl: "/",
  linkTitle: "Link title",
  linkText: "Link title",
  linkFullWidth: false,
  isButton: false,
  buttonEvent: () => {}
};

ButtonDefault.propTypes = {
  linkUrl: PropTypes.string,
  linkTitle: PropTypes.string,
  linkText: PropTypes.string,
  linkFullWidth: PropTypes.bool,
  isButton: PropTypes.bool,
  buttonEvent: PropTypes.func
};

export default ButtonDefault;
