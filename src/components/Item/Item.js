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
    <>
      <Link to={`/item/detail/${id}`}>
        <div className="product__card card">
          <img src={image} alt={title} className="card__image" />
          <div className="card__footer">
            <h3 className="card__title">{title}</h3>
            <span className="card__price">${price}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Item;
