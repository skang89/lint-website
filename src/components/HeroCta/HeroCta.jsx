// import react packages
import React from "react";
import { Link } from "react-router-dom";

// import components
import ButtonDefault from "../Buttons/ButtonDefault/ButtonDefault";

// import styles
import "./HeroCta.scss";

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
                src="/assets/product/Placeholder_Default.png"
                alt="placeholder product"
                className="lc-hero-cta__image"
              />
            </picture>
          </Link>
          <div className="bx--col lc-hero-cta__content">
            <h2 className="lc-type__header__h2 lc-type__header__h2--bold">Brushes CTA</h2>
            <ButtonDefault linkFullWidth={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCta;
