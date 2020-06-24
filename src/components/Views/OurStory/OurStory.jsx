// import react packages
import React from "react";

// import components
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import TriangleBannerBottom from "../../TriangleBannerBottom/TriangleBannerBottom";

// import styles
import "./OurStory.scss";

const OurStory = () => {
  return (
    <>
      <Header />
      <div className="bx--grid bx--grid--full-width lc-our-story">
        <div className="bx--row lc-our-story__title">
          <div className="bx--col">
            <h1 className="lc-type__header__h1 lc-type__header__h1--bold lc-text__center">
              Our Story
            </h1>
          </div>
        </div>
        <div className="bx--row lc-our-story__content">
          <div>
            <div className="bx--col lc-type__body__b1 lc-type__body__b1--light lc-text__center">
              <p>
                Lint is all about expression. We’re here to make people look good and feel
                bold.
              </p>
              <p>
                Right now, we’re just about to update the site with our new range of
                professional brushes. Until then, join our family, carry the Lint torch
                and spread the love.
              </p>
              <p>
                Lint is all about expression. We’re here to make people look good and feel
                bold.
              </p>
              <p>
                Right now, we’re just about to update the site with our new range of
                professional brushes. Until then, join our family, carry the Lint torch
                and spread the love.
              </p>
            </div>
          </div>
        </div>
      </div>
      <TriangleBannerBottom />
      <Footer />
    </>
  );
};

export default OurStory;
