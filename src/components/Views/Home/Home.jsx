// import react packages
import React from "react";

// import components
import Header from "../../Header/Header";
import OfferBanner from "../../OfferBanner/OfferBanner";
import HeroCta from "../../HeroCta/HeroCta";
import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <OfferBanner />
      <HeroCta />
      <HeroCta />
      <HeroCta />
      <Footer />
    </>
  );
};

export default Home;
