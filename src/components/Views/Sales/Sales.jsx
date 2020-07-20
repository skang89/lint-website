// import react packages
import React from "react";

// import components
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import TriangleTop from "../../TriangleTop/TriangleTop";

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
            <h1 className="lc-type__header__h2 lc-type__header__h2--bold">SALE</h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sales;
