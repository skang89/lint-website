// import React packages
import React from "react";

// import componets
import ProductItem from "../ProductItem/ProductItem";

// import styles
import "./ConsiderItems.scss";

const ConsiderItems = () => {
  return (
    <div className="lc-consider-items">
      <div className="bx--row">
        <div className="bx--col">
          <h2 className="lc-type__header__h1 lc-type__header__h1--bold lc-text__uppercase">
            You might also want
          </h2>
        </div>
      </div>
      <div className="bx--row">
        <div className="bx--col-sm-2 bx--col-md-4 bx--col-lg-3">
          <ProductItem />
        </div>
        <div className="bx--col-sm-2 bx--col-md-4 bx--col-lg-3">
          <ProductItem />
        </div>
        <div className="bx--col-sm-0 bx--col-md-0 bx--col-lg-3">
          <ProductItem />
        </div>
        <div className="bx--col-sm-0 bx--col-md-0 bx--col-lg-3">
          <ProductItem />
        </div>
      </div>
    </div>
  );
};

export default ConsiderItems;
