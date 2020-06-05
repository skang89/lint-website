// import react packages
import React from "react";
import { Link } from "react-router-dom";

// import components
import ButtonDefault from "../Buttons/ButtonDefault/ButtonDefault";

const ProductItem = () => {
  return (
    <div className="bx--grid bx--grid--full-width lc-product-items">
      <div className="bx--row">
        <div className="bx--col-sm-2 bx--col-md-2 bx-col-lg-4 lc-product-items__item">
          <Link to="/" title="product item">
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
          </Link>
          <div className="bx--row">
            <div className="bx--col lc-product-items__details">
              <h3 className="lc-type__subheader__h2  lc-type__subheader__h2--bold lc-text__uppercase ">
                L1 Brush
              </h3>
              <h4 className="lc-type__subheader__h3  lc-text__uppercase ">£15.00</h4>
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col ">
              <ButtonDefault linkFullWidth={true} />
            </div>
          </div>
        </div>
        <div className="bx--col-sm-2 bx--col-md-2 bx-col-lg-4 lc-product-items__item">
          <Link to="/" title="product item">
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
          </Link>
          <div className="bx--row">
            <div className="bx--col lc-product-items__details">
              <h3 className="lc-type__subheader__h2  lc-type__subheader__h2--bold lc-text__uppercase ">
                L1 Brush
              </h3>
              <h4 className="lc-type__subheader__h3  lc-text__uppercase ">£15.00</h4>
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col ">
              <ButtonDefault linkFullWidth={true} />
            </div>
          </div>
        </div>
        <div className="bx--col-sm-2 bx--col-md-2 bx-col-lg-4 lc-product-items__item">
          <Link to="/" title="product item">
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
          </Link>
          <div className="bx--row">
            <div className="bx--col lc-product-items__details">
              <h3 className="lc-type__subheader__h2  lc-type__subheader__h2--bold lc-text__uppercase ">
                L1 Brush
              </h3>
              <h4 className="lc-type__subheader__h3  lc-text__uppercase ">£15.00</h4>
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col ">
              <ButtonDefault linkFullWidth={true} />
            </div>
          </div>
        </div>
        <div className="bx--col-sm-2 bx--col-md-2 bx-col-lg-4 lc-product-items__item">
          <Link to="/" title="product item">
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
          </Link>
          <div className="bx--row">
            <div className="bx--col lc-product-items__details">
              <h3 className="lc-type__subheader__h2  lc-type__subheader__h2--bold lc-text__uppercase ">
                L1 Brush
              </h3>
              <h4 className="lc-type__subheader__h3  lc-text__uppercase ">£15.00</h4>
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col ">
              <ButtonDefault linkFullWidth={true} />
            </div>
          </div>
        </div>
        <div className="bx--col-sm-2 bx--col-md-2 bx-col-lg-4 lc-product-items__item">
          <Link to="/" title="product item">
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
          </Link>
          <div className="bx--row">
            <div className="bx--col lc-product-items__details">
              <h3 className="lc-type__subheader__h2  lc-type__subheader__h2--bold lc-text__uppercase ">
                L1 Brush
              </h3>
              <h4 className="lc-type__subheader__h3  lc-text__uppercase ">£15.00</h4>
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col ">
              <ButtonDefault linkFullWidth={true} />
            </div>
          </div>
        </div>
        <div className="bx--col-sm-2 bx--col-md-2 bx-col-lg-4 lc-product-items__item">
          <Link to="/" title="product item">
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
          </Link>
          <div className="bx--row">
            <div className="bx--col lc-product-items__details">
              <h3 className="lc-type__subheader__h2  lc-type__subheader__h2--bold lc-text__uppercase ">
                L1 Brush
              </h3>
              <h4 className="lc-type__subheader__h3  lc-text__uppercase ">£15.00</h4>
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col ">
              <ButtonDefault linkFullWidth={true} />
            </div>
          </div>
        </div>
        <div className="bx--col-sm-2 bx--col-md-2 bx-col-lg-4 lc-product-items__item">
          <Link to="/" title="product item">
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
          </Link>
          <div className="bx--row">
            <div className="bx--col lc-product-items__details">
              <h3 className="lc-type__subheader__h2  lc-type__subheader__h2--bold lc-text__uppercase ">
                L1 Brush
              </h3>
              <h4 className="lc-type__subheader__h3  lc-text__uppercase ">£15.00</h4>
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col ">
              <ButtonDefault linkFullWidth={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
