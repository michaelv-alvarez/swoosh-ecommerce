import React from "react";
import { Link } from "react-router-dom";
const temp_img =
  "https://res.cloudinary.com/dtpfo51rx/image/upload/v1668649993/swoosh/products/85-Vintage-Nike-Puffer-Jacket-1_600x-PhotoRoom_nj8pz7.png";
const Item = ({ title, image, price, id, description, showAs }) => {
  if (showAs === "Detail") {
    return (
      <div className="detail__card card">
        <div className="card__image">
          <img src={temp_img} alt={title} className="image" />
        </div>
        <div className="card__body">
          <div className="card__header">
            <h3 className="card__title">{title}</h3>
            <span className="card__price">${price}</span>
          </div>

          <div className="card__description">{description}</div>
          <button className="card__button">ADD TO CART</button>
        </div>
      </div>
    );
  }
  return (
    <>
      <Link to={`/item/detail/${id}`}>
        <div className="product__card card">
          <img src={temp_img} alt={title} className="card__image" />
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
