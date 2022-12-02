import React, { useEffect, useState } from "react";
import ProductsCategoriesCard from "./ProductsCategoriesCard";

const ProductsCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://b612-used-products-resale-server-side-sanjitweb479.vercel.app/productsCategories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <div className="text-4xl text-center">Car Categories</div>
      <div className="flex m-4">
        {categories.map((category) => (
          <ProductsCategoriesCard
            key={category._id}
            category={category}
          ></ProductsCategoriesCard>
        ))}
      </div>
    </div>
  );
};

export default ProductsCategories;
