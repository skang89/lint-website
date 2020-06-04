// import react packages
import React from "react";
import { Link } from "react-router-dom";

// import components
import MainMenu from "../MainMenu/MainMenu";
import CurrencySelector from "../CurrencySelector/CurrencySelector";

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
              <Link to="/" title="Basket items: 0" className="lc-button">
                <img
                  src="/assets/icons/icons-header-shopping-bag-small.svg"
                  alt="shopping basket"
                />
                <span className="lc-header__items__basket__number">0</span>
              </Link>
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