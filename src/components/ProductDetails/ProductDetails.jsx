// import react packages
import React from "react";

// import components
import ProductImages from "./../ProductImages/ProductImages";
import ButtonQuantity from "../Buttons/ButtonQuantity/ButtonQuantity";
import ButtonDefault from "../Buttons/ButtonDefault/ButtonDefault";

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

        <div className="bx--row ">
          <div className="bx--col-4 bx--col-lg-8 bx--col-xlg-8 lc-product-details__images">
            <ProductImages />
          </div>
          <div className="bx--col-4 bx--col-lg-3 bx--col-xlg-3 lc-product-details__info">
            <ButtonQuantity label={"Quantity"} />
          </div>
          <div className="bx--col-4 bx--col-lg-3 bx--col-xlg-3 lc-product-details__info">
            <ButtonDefault linkFullWidth={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
