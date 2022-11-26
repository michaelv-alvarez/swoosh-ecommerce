import React from "react";
// import { addNewOrder } from "../../utils/firebaseFetching";
// import { useCartContext } from "../../context/CartState";
// import { serverTimestamp } from "firebase/firestore";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";

const Checkout = () => {
  // const { items } = useCartContext();

  return (
    <div className="checkout">
      <h1 className="checkout__title">Checkout</h1>
      <CheckoutForm />
    </div>
  );
};

export default Checkout;
