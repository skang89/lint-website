// import react components
import React from "react";
import { Link } from "react-router-dom";

// import style
import "./CurrencySelector.scss";

function onCurrencyClick() {
  const currencyMenu = document.querySelector(".lc-currency__menu");

  currencyMenu.classList.contains("lc-currency__menu--active")
    ? currencyMenu.classList.remove("lc-currency__menu--active")
    : currencyMenu.classList.add("lc-currency__menu--active");
}

const CurrencySelector = () => {
  return (
    <>
      <button
        type="button"
        title="Selected currency: £"
        className="lc-button__currency"
        onClick={onCurrencyClick}
      >
        <span className="lc-type__header__h1 lc-type__header__h1--bold">£</span>
      </button>

      <div className="lc-currency__menu">
        <button
          type="button"
          title="close currency menu"
          className="lc-currency__menu__button"
          onClick={onCurrencyClick}
        >
          <span className="lc-currency__menu__button__line"></span>
          <span className="lc-currency__menu__button__line"></span>
        </button>
        <nav className="bx--grid bx--grid--full-width lc-currency__menu__nav">
          <div className="bx--row">
            <div className="bx--col">
              <h2 className="lc-type__header__h2 lc-type__header__h2--bold">
                Select your currency
              </h2>
            </div>
          </div>
          <nav className="bx--row">
            <div className="bx--col-sm-4 bx--offset-lg-2 bx--col-lg-2">
              <ul>
                <li className="lc-type__subheader__h3 lc-type__subheader__h3--bold">
                  item
                </li>
              </ul>
            </div>
            <div className="bx--col-sm-4 bx--col-lg-2">
              <ul>
                <li className="lc-type__subheader__h3 lc-type__subheader__h3--bold">
                  item
                </li>
              </ul>
            </div>
            <div className="bx--col-sm-4 bx--col-lg-2">
              <ul>
                <li className="lc-type__subheader__h3 lc-type__subheader__h3--bold">
                  item
                </li>
              </ul>
            </div>
            <div className="bx--col-sm-4 bx--col-lg-2">
              <ul>
                <li className="lc-type__subheader__h3 lc-type__subheader__h3--bold">
                  item
                </li>
              </ul>
            </div>
          </nav>
        </nav>
      </div>
    </>
  );
};

export default CurrencySelector;
