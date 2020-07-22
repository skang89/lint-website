// import react packages
import React from "react";

// import components
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import TriangleTop from "../../TriangleTop/TriangleTop";
import ButtonDefault from "../../Buttons/ButtonDefault/ButtonDefault";

// import styles
import "./Sales.scss";

const Sales = () => {
  return (
    <>
      <Header />
      <TriangleTop />
      <div className="bx--grid bx--grid--full-width lc-sales">
        <div className="bx--row">
          <div className="bx--col">
            <h1 className="lc-type__header__h2 lc-type__header__h2--bold">
              3 products for £13.99 what the lint!
            </h1>
          </div>
        </div>
        <div className="bx--row">
          <div className="bx--col lc-sales__image">
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
          <div className="bx--col">
            <h2 className="lc-type__header__h2 lc-type__header__h2--bold">
              Why miss out on being you!
            </h2>
          </div>
        </div>
        <div className="bx--row">
          <div className="bx--col lc-type__body__b1 lc-sales__content">
            <p>
              With a Lint Pro-Membership, every month you’re guaranteed 3 top products
              will be sent straight to your door.
            </p>
            <p>Join now for £13.99 a month, sit back and relax!</p>
          </div>
        </div>
        <div className="bx--row">
          <div className="bx--col">
            <ButtonDefault linkFullWidth={true} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sales;
