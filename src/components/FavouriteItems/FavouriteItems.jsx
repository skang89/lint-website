// import react packages
import React from "react";

// import components
import ButtonDefault from "../Buttons/ButtonDefault/ButtonDefault";

// import styles
import "./FavouriteItems.scss";
import ButtonRemove from "../Buttons/ButtonRemove/ButtonRemove";

const FavouriteItems = () => {
  return (
    <>
      <div className="bx--row lc-favourite-items">
        <div className="bx--col-sm-2 bx--col-md-4 bx--col-lg-4 lc-favourite-items__item">
          <div className="bx--row">
            <div className="bx--col">
              <picture>
                <source
                  media="(max-width: 1055px)"
                  srcSet="/assets/product/Placeholder_Mobile.png"
                  alt="Order item"
                />
                <source
                  media="(min-width: 1056px)"
                  srcSet="/assets/product/Placeholder.png"
                  alt="Order item"
                />
                <img src="/assets/product/Placeholder_Default.png" alt="Order item" />
              </picture>
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col lc-favourite-items__details">
              <h3 className="lc-type__subheader__h2  lc-type__subheader__h2--bold ">
                L1 Brush
              </h3>
              <h4 className="lc-type__subheader__h3">
                <span>£</span>
                15.00
              </h4>
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col ">
              <ButtonDefault
                linkUrl="/"
                linkTitle="Buy now"
                linkText="Buy now"
                linkFullWidth={true}
              />
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col ">
              <ButtonRemove />
            </div>
          </div>
        </div>
        <div className="bx--col-sm-2 bx--col-md-4 bx--col-lg-4 lc-favourite-items__item">
          <div className="bx--row">
            <div className="bx--col">
              <picture>
                <source
                  media="(max-width: 1055px)"
                  srcSet="/assets/product/Placeholder_Mobile.png"
                  alt="Order item"
                />
                <source
                  media="(min-width: 1056px)"
                  srcSet="/assets/product/Placeholder.png"
                  alt="Order item"
                />
                <img src="/assets/product/Placeholder_Default.png" alt="Order item" />
              </picture>
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col lc-favourite-items__details">
              <h3 className="lc-type__subheader__h2  lc-type__subheader__h2--bold ">
                L1 Brush
              </h3>
              <h4 className="lc-type__subheader__h3">
                <span>£</span>
                15.00
              </h4>
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col ">
              <ButtonDefault
                linkUrl="/"
                linkTitle="Buy now"
                linkText="Buy now"
                linkFullWidth={true}
              />
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col ">
              <ButtonRemove />
            </div>
          </div>
        </div>
        <div className="bx--col-sm-2 bx--col-md-4 bx--col-lg-4 lc-favourite-items__item">
          <div className="bx--row">
            <div className="bx--col">
              <picture>
                <source
                  media="(max-width: 1055px)"
                  srcSet="/assets/product/Placeholder_Mobile.png"
                  alt="Order item"
                />
                <source
                  media="(min-width: 1056px)"
                  srcSet="/assets/product/Placeholder.png"
                  alt="Order item"
                />
                <img src="/assets/product/Placeholder_Default.png" alt="Order item" />
              </picture>
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col lc-favourite-items__details">
              <h3 className="lc-type__subheader__h2  lc-type__subheader__h2--bold ">
                L1 Brush
              </h3>
              <h4 className="lc-type__subheader__h3">
                <span>£</span>
                15.00
              </h4>
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col ">
              <ButtonDefault
                linkUrl="/"
                linkTitle="Buy now"
                linkText="Buy now"
                linkFullWidth={true}
              />
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col ">
              <ButtonRemove />
            </div>
          </div>
        </div>
        <div className="bx--col-sm-2 bx--col-md-4 bx--col-lg-4 lc-favourite-items__item">
          <div className="bx--row">
            <div className="bx--col">
              <picture>
                <source
                  media="(max-width: 1055px)"
                  srcSet="/assets/product/Placeholder_Mobile.png"
                  alt="Order item"
                />
                <source
                  media="(min-width: 1056px)"
                  srcSet="/assets/product/Placeholder.png"
                  alt="Order item"
                />
                <img src="/assets/product/Placeholder_Default.png" alt="Order item" />
              </picture>
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col lc-favourite-items__details">
              <h3 className="lc-type__subheader__h2  lc-type__subheader__h2--bold ">
                L1 Brush
              </h3>
              <h4 className="lc-type__subheader__h3">
                <span>£</span>
                15.00
              </h4>
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col ">
              <ButtonDefault
                linkUrl="/"
                linkTitle="Buy now"
                linkText="Buy now"
                linkFullWidth={true}
              />
            </div>
          </div>
          <div className="bx--row">
            <div className="bx--col ">
              <ButtonRemove />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavouriteItems;
