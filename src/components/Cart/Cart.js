import React from "react";
import { useCartContext } from "../../context/CartState";
import { MdOutlineClose } from "react-icons/md";
import Item from "../Item/Item";
import Divider from "../Divider/Divider";

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
        <Divider isCart={true} />
        <div className="cart__items">
          {items.map((product) => {
            return (
              <Item showAs="CartItem" product={product} key={product.id} />
            );
          })}
        </div>
        <Divider isCart={true} />
        <div className="flex-row cart__subtotal">
          <h4>Subtotal</h4>
          <span>US$96</span>
        </div>
        <Divider isCart={true} />
        <div className="flex-row cart__total">
          <h4>Total</h4>
          <span>US$112</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
