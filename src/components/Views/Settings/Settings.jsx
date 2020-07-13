// import react packages
import React from "react";

// import components
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import MemberName from "../../MemberName/MemberName";
import MemberMenu from "../../MemberMenu/MemberMenu";
import Addresses from "../../Addresses/Addresses";
import ButtonDefault from "../../Buttons/ButtonDefault/ButtonDefault";
import ButtonSecondary from "../../Buttons/ButtonSecondary/ButtonSecondary";

// import styles
import "./Settings.scss";

const Settings = () => {
  return (
    <>
      <Header />
      <div className="bx--grid bx--grid--full-width lc-settings">
        <div className="bx--row">
          <div className="bx--col">
            <MemberName />
          </div>
        </div>
        <div className="bx--row">
          <div className="bx--col-sm-4 bx-col-md-8 bx--col-lg-3">
            <MemberMenu />
          </div>
          <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-9">
            <div className="bx--row">
              <div className="bx--col">
                <h2 className="lc-type__subheader__h2 lc-type__subheader__h2--bold">
                  Addresses
                </h2>
              </div>
            </div>
            <div className="bx--row">
              <div className="bx--col">
                <Addresses />
              </div>
            </div>
            <div className="bx--row">
              <div className="bx--col">
                <ButtonDefault
                  linkText="Add delivery address"
                  linkTitle="Add a new delivery address"
                  linkFullWidth={true}
                />
              </div>
            </div>
            <div className="bx--row lc-settings__delete-account">
              <div className="bx--col">
                <ButtonSecondary
                  linkText="Delete account"
                  linkTitle="Delete account"
                  linkFullWidth={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Settings;
