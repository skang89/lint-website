// import react packages
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// import components
import ButtonDefault from "../Buttons/ButtonDefault/ButtonDefault";

// import styles
import "./ProductItem.scss";

const ProductItem = (props) => {
  const {
    productUrl,
    productName,
    productImageMobile,
    productImageLarge,
    productImageDefault,
    productButtonText,
    productPrice
  } = props;

  return (
    <div className="lc-product-items__item">
      <Link to={productUrl} title={productName}>
        <picture>
          <source
            media="(max-width: 1055px)"
            srcSet={productImageMobile}
            alt={productName}
          />
          <source
            media="(min-width: 1056px)"
            srcSet={productImageLarge}
            alt={productName}
          />
          <img src={productImageDefault} alt={productName} />
        </picture>
      </Link>
      <div className="bx--row">
        <div className="bx--col lc-product-items__details">
          <h3 className="lc-type__subheader__h2  lc-type__subheader__h2--bold lc-text__uppercase ">
            {productName}
          </h3>
          <h4 className="lc-type__subheader__h3  lc-text__uppercase ">
            <span>£</span>
            {productPrice.toFixed(2)}
          </h4>
        </div>
      </div>
      <div className="bx--row">
        <div className="bx--col ">
          <ButtonDefault
            linkUrl={productUrl}
            linkTitle={productName}
            linkText={productButtonText}
            linkFullWidth={true}
          />
        </div>
      </div>
    </div>
  );
};

// prop types
ProductItem.defaultProps = {
  productUrl: "/",
  productName: "L1 Brush",
  productImageDefault: "/assets/product/Placeholder_Default.png",
  productImageMobile: "/assets/product/Placeholder_Mobile.png",
  productImageLarge: "/assets/product/Placeholder.png",
  productButtonText: "Buy now",
  productPrice: 15.0
};

ProductItem.propTypes = {
  productUrl: PropTypes.string,
  productName: PropTypes.string,
  productImageMobile: PropTypes.string,
  productImageLarge: PropTypes.string,
  productImageDefault: PropTypes.string,
  productButtonText: PropTypes.string,
  productPrice: PropTypes.number
};

export default ProductItem;
