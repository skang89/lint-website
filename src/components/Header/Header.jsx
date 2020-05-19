// import react packages
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const onButtonClick = () => {
    if (
      !document
        .querySelector(".lc-header__button")
        .classList.contains("lc-header__button--active")
    ) {
      document
        .querySelector(".lc-header__button")
        .classList.toggle("lc-header__button--active");
      document
        .querySelector(".lc-header__overlay")
        .classList.toggle("lc-header__overlay--active");
    } else {
      document
        .querySelector(".lc-header__button")
        .classList.remove("lc-header__button--active");
      document
        .querySelector(".lc-header__overlay")
        .classList.remove("lc-header__overlay--active");
    }
  };

  return (
    <>
      <header className="lc-header">
        <Link to="/">
          <img
            src="assets/img/LINT_Logo.svg"
            className="lc-header__logo"
            alt="Lint Cosmetics"
          />
        </Link>
      </header>
    </>
  );
};

export default Header;
