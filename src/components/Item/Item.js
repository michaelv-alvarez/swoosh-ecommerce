import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartState";
import ItemCounter from "../ItemCounter/ItemCounter";
import { GoTrashcan } from "react-icons/go";

const Item = ({ product, showAs }) => {
  const [itemCounter, setItemCounter] = useState(1);
  const { addItemToCart, openCart } = useCartContext();

  const handleOnAdd = () => {
    addItemToCart(product, itemCounter);
    openCart();
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
            <span className="card__price">US${product.price}</span>
          </div>

          <div className="card__description">{product.description}</div>
          <ItemCounter counter={itemCounter} setCounter={setItemCounter} />
          <button className="card__button" onClick={handleOnAdd}>
            ADD TO CART
          </button>
        </div>
      </div>
    );
  }
  if (showAs === "CartItem") {
    return (
      <div className="cart__card card">
        <div className="card__image">
          <img src={product.image} alt={product.title} className="image" />
        </div>

        <div className="card__desc">
          <p className="card__title">{product.title}</p>
          <p className="card__category">
            Category: <span>{product.category}</span>
          </p>
          <div className="card__price">
            <span className="price">US${product.price}</span>
          </div>

          <ItemCounter
            showAs="Cart"
            productId={product.id}
            productQty={product.qty}
          />
        </div>

        <div className="card__actions">
          <GoTrashcan className="delete" />
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
            <span className="card__price">US${product.price}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Item;
