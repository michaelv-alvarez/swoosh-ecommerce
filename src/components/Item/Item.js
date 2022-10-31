import React from "react";
import { Link } from "react-router-dom";

const Item = ({ title, image, price, id, description, showAs }) => {
  if (showAs === "Detail") {
    return (
      <div className="detail__card card">
        <img src={image} alt={title} className="card__image" />
        <div className="card__body">
          <h3 className="card__title">{title}</h3>
          <div className="card__description">{description}</div>
          <span className="card__price">${price}</span>
        </div>
      </div>
    );
  }
  return (
    <div className="product__card card">
      <Link to={`/item/detail/${id}`}>
        <img src={image} alt={title} className="card__image" />
      </Link>

      <div className="card__footer">
        <Link to={`/item/detail/${id}`}>
          <h3 className="card__title">{title}</h3>
        </Link>
        <span className="card__price">${price}</span>
      </div>
    </div>
  );
};

export default Item;
