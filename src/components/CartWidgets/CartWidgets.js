import React from "react";
import shopping_bag from "../../shopping-bag.svg";

const CartWidgets = () => {
  return (
    <div className="cart-widgets">
      <img
        src={shopping_bag}
        alt="shopping bag"
        className="cart-widgets__shopping-bag"
      />
      <span className="cart-widgets__items-counter">3</span>
    </div>
  );
};

export default CartWidgets;
