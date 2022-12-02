import React from "react";
import ProductsCategories from "../../productsCategories/ProductsCategories";
import Banner from "../Banner/Banner";
import Guidence from "../Guidence/Guidence";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <Guidence></Guidence>
      <ProductsCategories></ProductsCategories>
    </div>
  );
};

export default Home;
