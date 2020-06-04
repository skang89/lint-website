// import react packages
import React from "react";
import { Link } from "react-router-dom";

const ProductType = () => {
  return (
    <div className="bx--grid bx--grid--full-width lc-product-type__header">
      <div className="bx--row">
        <div className="bx--col">
          <h1 className="lc-type__meta__s3  lc-type__meta__s3--bold lc-text__uppercase ">
            Brushes
          </h1>
        </div>
        <div className="bx--col">
          <Link
            title="sort by filter"
            className="lc-type__meta__s4  lc-type__meta__s4--bold lc-text__right lc-text__underline lc-display__block"
          >
            Featured
          </Link>
        </div>
      </div>
      <div className="bx--row">
        <div className="bx--col">
          <h2 className="lc-type__subheader__h2  lc-type__subheader__h2--bold lc-text__uppercase ">
            Individual
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProductType;