// import react packages
import React from "react";
import { Link } from "react-router-dom";

const OfferBanner = () => {
  return (
    <div className="bx--grid bx--grid--full-width lc-offer-banner">
      <div className="bx--row">
        <div className="bx--col">
          <Link to="/" title="Banner title">
            <h3 className="lc-type__meta__s3 lc-type__meta__s3--bold lc-text__center lc-text__uppercase lc-offer-banner__headline">
              This is some text for an offer &nbsp;<span></span>
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
