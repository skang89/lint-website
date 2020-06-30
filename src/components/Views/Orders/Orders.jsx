// import react packages
import React from "react";

// import components
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import MemberName from "../../MemberName/MemberName";
import MemberMenu from "../../MemberMenu/MemberMenu";
import OrderItems from "../../OrderItems/OrderItems";

// import styles
import "./Orders.scss";

const Orders = () => {
  return (
    <>
      <Header />
      <div className="bx--grid bx--grid--full-width lc-orders">
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
            <OrderItems />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Orders;
