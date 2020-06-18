// import react components
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// import style
import "./ButtonSecondary.scss";

const ButtonSecondary = (props) => {
  const { linkUrl, linkTitle, linkText, linkFullWidth } = props;

  return (
    <Link
      to={linkUrl}
      title={linkTitle}
      className={`lc-button__secondary ${linkFullWidth ? "lc-button__full-width" : ""}`}
    >
      {linkText}
    </Link>
  );
};

// prop types
ButtonSecondary.defaultProps = {
  linkUrl: "/",
  linkTitle: "Link title",
  linkText: "Link title",
  linkFullWidth: false
};

ButtonSecondary.propTypes = {
  linkUrl: PropTypes.string,
  linkTitle: PropTypes.string,
  linkText: PropTypes.string,
  linkFullWidth: PropTypes.bool
};

export default ButtonSecondary;
