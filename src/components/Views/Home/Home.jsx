// import react packages
import React from "react";

// import components
import Header from "../../Header/Header";
import OfferBanner from "../../OfferBanner/OfferBanner";

const Home = () => {
  return (
    <>
      <Header />
      <OfferBanner />
      <h1 className="lc-type__header__h1">This is Lint Cosmetics Header 1</h1>
    </>
  );
};

export default Home;
