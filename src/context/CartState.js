import { useContext, createContext, useState } from "react";
import React from "react";

const initialState = {
  items: [],
  isOpen: false,
  addItemToCart: () => {},
  getNumberOfItems: () => {},
  openCart: () => {},
  closeCart: () => {},
  emptyCart: () => {},
};
const CartContext = createContext(initialState);

const CartState = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const hanldeOpenCart = () => {
    setIsOpen(true);
  };
  const handleCloseCart = () => {
    setIsOpen(false);
  };
  const handleAddItemToCart = (item, quantity) => {
    const temp = [...items];
    const found = temp.find((product) => product.id === item.id);

    if (found) {
      found.qty += quantity;
    } else {
      item.qty = quantity;
      temp.push(item);
    }
    setItems([...temp]);
  };
  const handleNumberOfItems = () => {
    const total = items.length;
    return total;
  };
  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        addItemToCart: handleAddItemToCart,
        getNumberOfItems: handleNumberOfItems,
        openCart: hanldeOpenCart,
        closeCart: handleCloseCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;

export const useCartContext = () => {
  return useContext(CartContext);
};