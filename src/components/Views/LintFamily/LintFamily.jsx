// import react packages
import React from "react";

// import components
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import FamilyMember from "../../FamilyMember/FamilyMember";

// import styles
import "./LintFamily.scss";

const LintFamily = () => {
  return (
    <>
      <Header />
      <div className="bx--grid bx--grid--full-width lc-lint-family">
        <div className="bx--row">
          <div className="bx--col">
            <h1 className="lc-type__header__h2 lc-type__header__h2--bold">
              The Lint Family
            </h1>
          </div>
        </div>
        <div className="bx--row">
          <div className="bx--col lc-type__body__b1 lc-lint-family__copy">
            <p>
              Lint has always been about collaborting and making one big, happy family and
              we wouldn’t be here without these Lint Chicks.
            </p>
          </div>
        </div>
        <div className="bx--row">
          <div className="bx--col">
            <FamilyMember />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LintFamily;
