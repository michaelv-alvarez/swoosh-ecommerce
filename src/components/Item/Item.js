import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cart/CartState";
const Item = ({ product, showAs }) => {
  const { addItemToCart } = useCartContext();
  const hanldeClick = () => {
    addItemToCart(product);
  };
  if (showAs === "Detail") {
    return (
      <div className="detail__card card">
        <div className="card__image">
          <img src={product.image} alt={product.title} className="image" />
        </div>
        <div className="card__body">
          <div className="card__header">
            <h3 className="card__title">{product.title}</h3>
            <span className="card__price">${product.price}</span>
          </div>

          <div className="card__description">{product.description}</div>
          <button className="card__button" onClick={hanldeClick}>
            ADD TO CART
          </button>
        </div>
      </div>
    );
  }
  return (
    <>
      <Link to={`/item/detail/${product.id}`}>
        <div className="product__card card">
          <img
            src={product.image}
            alt={product.title}
            className="card__image"
          />
          <div className="card__footer">
            <h3 className="card__title">{product.title}</h3>
            <span className="card__price">${product.price}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Item;
