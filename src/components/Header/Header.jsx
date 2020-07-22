// import react packages
import React from "react";
import { Link } from "react-router-dom";

// import components
import CurrencySelector from "../CurrencySelector/CurrencySelector";
import Basket from "../Basket/Basket";
import MainMenu from "../MainMenu/MainMenu";

// import styles
import "./Header.scss";

const Header = () => {
  return (
    <div className="bx--grid bx--grid--full-width lc-header">
      <div className="bx--row lc-align__items--center">
        <div className="bx--col bx--col-md-6 bx--col-lg-13 bx--col-xlg-13 bx--col-max-14 lc-header__logo">
          <div>
            <Link to="/" title="Lint Cosmetics">
              <img src="/assets/logos/LINT_Logo.svg" alt="Lint Cosmetics" />
            </Link>
          </div>
        </div>
        <div className="bx--col bx--col-md-2 bx--col-lg-3 bx--col-xlg-3 bx--col-max-2 lc-header__items">
          <div className="bx--row lc-align__items--center">
            <div className="bx--col lc-header__items lc-header__items__currency">
              <CurrencySelector />
            </div>
            <div className="bx--col lc-header__items lc-header__items__basket">
              <Basket />
            </div>
            <div className="bx--col lc-header__items lc-header__items__menu">
              <MainMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
