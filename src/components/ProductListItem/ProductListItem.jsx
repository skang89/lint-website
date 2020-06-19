// import react packages
import React from "react";

// import components
import ProductItem from "../ProductItem/ProductItem";

const ProductListItem = () => {
  return (
    <div className="bx--grid bx--grid--full-width lc-product-items">
      <div className="bx--row">
        <div className="bx--col-sm-2 bx--col-md-4 bx--col-lg-3">
          <ProductItem />
        </div>
        <div className="bx--col-sm-2 bx--col-md-4 bx--col-lg-3">
          <ProductItem />
        </div>
        <div className="bx--col-sm-2 bx--col-md-4 bx--col-lg-3">
          <ProductItem />
        </div>
        <div className="bx--col-sm-2 bx--col-md-4 bx--col-lg-3">
          <ProductItem />
        </div>
        <div className="bx--col-sm-2 bx--col-md-4 bx--col-lg-3">
          <ProductItem />
        </div>
        <div className="bx--col-sm-2 bx--col-md-4 bx--col-lg-3">
          <ProductItem />
        </div>
        <div className="bx--col-sm-2 bx--col-md-4 bx--col-lg-3">
          <ProductItem />
        </div>
        <div className="bx--col-sm-2 bx--col-md-4 bx--col-lg-3">
          <ProductItem />
        </div>
        <div className="bx--col-sm-2 bx--col-md-4 bx--col-lg-3">
          <ProductItem />
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
