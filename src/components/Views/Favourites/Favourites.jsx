// import react packages
import React from "react";

// import components
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import MemberName from "../../MemberName/MemberName";
import MemberMenu from "../../MemberMenu/MemberMenu";
import FavouriteItems from "../../FavouriteItems/FavouriteItems";

// import styles
import "./Favourites.scss";

const Favourites = () => {
  return (
    <>
      <Header />
      <div className="bx--grid bx--grid--full-width lc-favourites">
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
            <FavouriteItems />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favourites;
