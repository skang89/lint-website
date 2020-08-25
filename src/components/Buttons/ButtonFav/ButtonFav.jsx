// import react components
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// import style
import "./ButtonFav.scss";

const ButtonFav = (props) => {
  const { linkUrl, linkTitle, linkText, linkFullWidth } = props;

  return (
    <Link
      to={linkUrl}
      title={linkTitle}
      className={`lc-button__fav ${linkFullWidth ? "lc-button__full-width" : ""}`}
    >
      {linkText}
      <span>
        <img
          className="lc-button__fav__icon"
          src="/assets/icons/favorite--empty.svg"
          alt="favourite icon"
          srcSet="/assets/icons/favorite--empty.svg"
        />
      </span>
    </Link>
  );
};

// prop types
ButtonFav.defaultProps = {
  linkUrl: "/",
  linkTitle: "Link title",
  linkText: "Link title",
  linkFullWidth: false
};

ButtonFav.propTypes = {
  linkUrl: PropTypes.string,
  linkTitle: PropTypes.string,
  linkText: PropTypes.string,
  linkFullWidth: PropTypes.bool
};

export default ButtonFav;
