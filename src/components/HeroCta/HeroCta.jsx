// import react packages
import React from "react";
import { Link } from "react-router-dom";

const HeroCta = () => {
  return (
    <div className="bx--grid bx--grid--full-width lc-hero-cta">
      <div className="bx--row">
        <div className="bx--col lc-hero-cta__container">
          <Link to="/" title="hero-cta">
            <picture>
              <source
                media="(max-width: 1055px)"
                srcset="/assets/product/Placeholder_Mobile.png"
                alt="placeholder product"
              />
              <source
                media="(min-width: 1056px)"
                srcset="/assets/product/Placeholder.png"
                alt="placeholder product"
              />
              <img
                src="/assets/product/Placeholder_Default.jpg"
                alt="placeholder product"
                className="lc-hero-cta__image"
              />
            </picture>
          </Link>
          <div className="bx--col lc-hero-cta__content">
            <h2 className="lc-type__header__h2 lc-text__uppercase">Brushes CTA</h2>
            <Link to="/" title="hero-cta" className="lc-button lc-button__default">
              Shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCta;
