// import react packages
import React from "react";
import { Link } from "react-router-dom";

// import styles
import "./OfferBanner.scss";

const OfferBanner = () => {
  return (
    <Link to="/" title="Banner title">
      <div className="bx--grid bx--grid--full-width lc-offer-banner">
        <div className="bx--row">
          <div className="bx--col">
            <h3 className="lc-type__meta__s3 lc-type__meta__s3--bold lc-offer-banner__headline">
              This is some text for an offer &nbsp;<span></span>
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OfferBanner;
