// import react packages
import React from "react";

// import components
import Header from "../../Header/Header";
import OfferBanner from "../../OfferBanner/OfferBanner";
import ProductType from "../../ProductType/ProductType";
import ProductListItem from "../../ProductListItem/ProductListItem";
import Footer from "../../Footer/Footer";
import AddedToBag from "../../AddedToBag/AddedToBag";

const Products = () => {
  return (
    <>
      <Header />
      <OfferBanner />
      <ProductType />
      <ProductListItem />
      <AddedToBag />
      <Footer />
    </>
  );
};

export default Products;
