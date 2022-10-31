import React from "react";

const Product = ({ title, image, price }) => {
  return (
    <div className="product__card card">
      <img src={image} alt={title} className="card__image" />
      <div className="card__footer">
        <h3 className="card__title">{title}</h3>
        <span className="card__price">${price}</span>
      </div>
    </div>
  );
};

export default Product;
