// import react packages
import React from "react";
import { Link } from "react-router-dom";

// import components
import ButtonPlusMinus from "../Buttons/ButtonPlusMinus/ButtonPlusMinus";
import ButtonRemove from "../Buttons/ButtonRemove/ButtonRemove";

// import styles
import "./BasketItem.scss";

const BasketItem = () => {
  return (
    <div>
      <div className="bx--grid bx--grid--full-width lc-basket">
        <div className="bx--row lc-basket__title">
          <div className="bx--col">
            <h1 className="lc-type__header__h1 lc-type__header__h1--bold lc-text__uppercase">
              Shopping Bag
            </h1>
          </div>
        </div>
        <div className="bx--row lc-basket__items">
          <div className="bx--col-sm-2 bx--col-lg-3">
            <Link to="/" title="L1 Brush">
              <picture>
                <source
                  media="(max-width: 1055px)"
                  srcset="/assets/product/Placeholder_Mobile.png"
                  alt="L1 Brush"
                />
                <source
                  media="(min-width: 1056px)"
                  srcset="/assets/product/Placeholder.png"
                  alt="L1 Brush"
                />
                <img src="/assets/product/Placeholder_Default.jpg" alt="L1 Brush" />
              </picture>
            </Link>
            <div className="bx--row">
              <div className="bx--col lc-basket__items__details">
                <h3 className="lc-type__subheader__h2  lc-type__subheader__h2--bold lc-text__uppercase ">
                  L1 Brush
                </h3>
                <h4 className="lc-type__subheader__h3  lc-text__uppercase ">
                  <span>£</span>15.99
                </h4>
              </div>
            </div>
            <div className="bx--row">
              <div className="bx--col ">
                <ButtonPlusMinus />
              </div>
            </div>
            <div className="bx--row">
              <div className="bx--col ">
                <ButtonRemove />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
