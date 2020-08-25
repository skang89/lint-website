// import react packages
import React from "react";

// import components
import ButtonPrimary from "../Buttons/ButtonPrimary/ButtonPrimary";

// import styles
import "./AddedToBag.scss";

const onButtonCloseClick = () => {
  const addToBag = document.querySelector(".lc-add-bag__overlay");

  if (addToBag.classList.contains("lc-add-bag__overlay--active")) {
    addToBag.classList.remove("lc-add-bag__overlay--active");
  }
};

const AddedToBag = () => {
  return (
    <div className="bx--grid bx--grid--full-width lc-add-bag__overlay">
      <div className="bx--row">
        <div className="bx--col-md-8 bx--col-lg-7">
          <h2 className="lc-type__subheader__h1 lc-type__subheader__h1--bold lc-type__subheader__h1--light">
            Successfully added to bag
          </h2>
        </div>
        <div className="bx--col-md-8 bx--col-lg-2">
          <ButtonPrimary
            linkText="View Bag"
            linkTitle="View Bag"
            linkUrl="/"
            linkFullWidth={true}
            isButton={false}
          />
        </div>
        <div className="bx--col-md-8 bx--col-lg-2">
          <ButtonPrimary
            linkText="Checkout"
            linkTitle="Checkout"
            linkUrl="/"
            linkFullWidth={true}
            isButton={false}
          />
        </div>
        <button
          type="button"
          title="close successfully added to basket"
          className="lc-add-bag__overlay__button"
          onClick={onButtonCloseClick}
        >
          <span className="lc-add-bag__overlay__button__line"></span>
          <span className="lc-add-bag__overlay__button__line"></span>
        </button>
      </div>
    </div>
  );
};

export default AddedToBag;
