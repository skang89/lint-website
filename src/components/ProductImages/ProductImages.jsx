// import react packages
import React from "react";

// import styles
import "./ProductImages.scss";

const ProductImages = () => {
  return (
    <div className="lc-product-details__images">
      <div className="bx--row">
        <div className="bx--col-sm-4 bx--col-lg-6">
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
            />
          </picture>
        </div>
        <div className="bx--col-sm-0 bx--col-md-0 bx--col-lg-6">
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
            />
          </picture>
        </div>
        <div className="bx--col">
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
            />
          </picture>
        </div>
        <div className="bx--col">
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
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
