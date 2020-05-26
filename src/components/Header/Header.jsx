// import react packages
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bx--grid bx--grid--full-width lc-header">
      <div className="bx--row">
        <div className="bx--col bx--col-md-6 bx--col-lg-12 bx--col-xlg-14 bx--col-max-14 lc-header__logo">
          <div>
            <Link to="/">
              <img src="/assets/logos/LINT_Logo.svg" alt="Lint Cosmetics" />
            </Link>
          </div>
        </div>
        <div className="bx--col bx--col-md-2 bx--col-lg-4 bx--col-xlg-2 bx--col-max-2">
          <div className="bx--row">
            <div className="bx--col ">
              <span className="lc-type__header__h1">£</span>
            </div>
            <div className="bx--col">
              <img
                src="assets/icons/icons-header-shopping-bag-small.svg"
                alt="shopping basket"
              />
            </div>
            <div className="bx--col">
              <button type="button">
                <span>-</span>
                <span>-</span>
                <span>-</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
