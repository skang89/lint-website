// import react packages
import React from "react";

// import components
import Header from "../../Header/Header";
import OfferBanner from "../../OfferBanner/OfferBanner";
import ProductType from "../../ProductType/ProductType";
import ProductItem from "../../ProductItem/ProductItem";
import Footer from "../../Footer/Footer";

const Products = () => {
  return (
    <>
      <Header />
      <OfferBanner />
      <ProductType />
      <ProductItem />
      <Footer />
    </>
  );
};

export default Products;
