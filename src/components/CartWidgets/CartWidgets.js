import React, { useEffect, useState } from "react";
import shopping_bag from "../../shopping-bag.svg";
import { useCartContext } from "../../context/cart/CartState";
const CartWidgets = () => {
  const [total, setTotal] = useState();
  const { getNumberOfItems, openCart } = useCartContext();
  const handleOpen = () => {
    openCart();
  };
  useEffect(() => {
    setTotal(getNumberOfItems());
  }, [getNumberOfItems]);
  return (
    <div className="cart-widgets" onClick={handleOpen}>
      <img
        src={shopping_bag}
        alt="shopping bag"
        className="cart-widgets__shopping-bag"
      />
      <span className="cart-widgets__items-counter">{total}</span>
    </div>
  );
};

export default CartWidgets;
