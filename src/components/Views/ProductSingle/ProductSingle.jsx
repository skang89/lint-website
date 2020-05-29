// import react packages
import React from "react";

// import components
import Header from "../../Header/Header";
import ProductType from "../../ProductType/ProductType";
import ProductDetails from "../../ProductDetails/ProductDetails";
import Footer from "../../Footer/Footer";

const ProductSingle = () => {
  return (
    <>
      <Header />
      <ProductType />
      <ProductDetails />
      <Footer />
    </>
  );
};

export default ProductSingle;
