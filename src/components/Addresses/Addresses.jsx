// import react packages
import React from "react";

// import components
import ButtonSecondary from "../Buttons/ButtonSecondary/ButtonSecondary";

// import styles
import "./Addresses.scss";

const Addresses = () => {
  return (
    <>
      <div className="lc-default-address">
        <div className="bx--row lc-default-address__title">
          <div className="bx--col">
            <h3 className="lc-type__form__f3 lc-type__form__f3--bold">
              Preferred Delivery Address
            </h3>
          </div>
        </div>
        <div className="bx--row lc-default-address__address">
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-6">
            <p>Name</p>
            <p>First Line Address</p>
            <p>Second Line Address</p>
            <p>Third Line Address</p>
            <p>Post Code</p>
            <p>Country</p>
            <ButtonSecondary
              linkText="Edit address"
              linkTitle="Edit default address"
              linkFullWidth={true}
            />
          </div>
        </div>
      </div>
      <div className="lc-other-addresses">
        <div className="bx--row lc-other-addresses__title">
          <div className="bx--col">
            <h3 className="lc-type__form__f3 lc-type__form__f3--bold">Other Addresses</h3>
          </div>
        </div>
        <div className="bx--row lc-other-addresses__address">
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-6">
            <p>Name</p>
            <p>First Line Address</p>
            <p>Second Line Address</p>
            <p>Third Line Address</p>
            <p>Post Code</p>
            <p>Country</p>
            <ButtonSecondary
              linkText="Edit address"
              linkTitle="Edit default address"
              linkFullWidth={true}
            />
          </div>
          <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-6">
            <p>Name</p>
            <p>First Line Address</p>
            <p>Second Line Address</p>
            <p>Third Line Address</p>
            <p>Post Code</p>
            <p>Country</p>
            <ButtonSecondary
              linkText="Edit address"
              linkTitle="Edit default address"
              linkFullWidth={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Addresses;
