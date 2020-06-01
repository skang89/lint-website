// import react packages
import React from "react";

// import components
import ProductImages from "./../ProductImages/ProductImages";

const ProductDetails = () => {
  return (
    <>
      <div className="bx--grid bx--grid--full-width lc-product-details">
        <div className="bx--row lc-product-details__title">
          <div className="bx--col">
            <h1 className="lc-type__header__h1  lc-type__header__h1--bold lc-text__uppercase ">
              L1 Brush
            </h1>
          </div>
          <div className="bx--col">
            <h2 className="lc-type__header__h1  lc-text__right">£15.99</h2>
          </div>
        </div>

        <div className="bx--row lc-product-details__images">
          <div className="bx--col bx--col-xlg-10">
            <ProductImages />
          </div>
          <div className="bx--col bx--col-xlg-6">test</div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
