import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const { products } = useLoaderData();
  //   const { products } = category.products;
  console.log(products);
  return (
    <div className="m-4">
      {products.map((product) => (
        <Product key={product.productName} product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
