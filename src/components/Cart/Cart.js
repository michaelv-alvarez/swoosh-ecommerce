import React from "react";
import { useCartContext } from "../../context/CartState";
import { MdOutlineClose } from "react-icons/md";
import Item from "../Item/Item";

const Cart = () => {
  const { isOpen, closeCart, items } = useCartContext();
  const handleClose = () => {
    closeCart();
  };
  return (
    <div className={isOpen ? "cart show" : "cart"}>
      <MdOutlineClose onClick={handleClose} className="cart__close" />
      <div className="cart__content">
        <h3 className="cart__title">Mi carrito</h3>
        <div className="cart__items">
          {items.map((product) => {
            return (
              <Item showAs="CartItem" product={product} key={product.id} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
