import React from "react";
import { Link } from "react-router-dom";

const ProductsCategoriesCard = ({ category }) => {
  // console.log(category);

  return (
    <div
      className="card card-compact w-96 bg-base-100 shadow-xl m-4"
    >
      <figure>
        <img src={category.categoryImg} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{category.category}</h2>
      </div>
      <div className="card-actions justify-end">
              <Link to={`/category/${category._id}`}>
                  <button className="btn btn-primary">Explore</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductsCategoriesCard;
