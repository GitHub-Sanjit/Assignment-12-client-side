import React from "react";

const Product = ({ product }) => {
  console.log(product.productsImg);
  return (
    <div className="card card-side bg-base-100 shadow-xl m-4">
      <figure>
        <img className="w-1/2" src={product.productsImg} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> Name: {product.productName}</h2>
        <p>OriginalPrice: {product.originalPrice}</p>
        <p>ResalePrice: {product.resalePrice}</p>
        <p>Location : {product.location}</p>
        <p>UsedTime : {product.UsedTime}</p>
        <p>OwnerName : {product.ownerName}</p>
        <p>PostedTime : {product.postedTime}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
