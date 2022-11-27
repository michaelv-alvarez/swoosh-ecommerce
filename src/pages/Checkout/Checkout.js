import React from "react";
import { useCartContext } from "../../context/CartState";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import logo_letters from "../../logo_letters_transparent.png";
const Checkout = () => {
  const { items } = useCartContext();

  return (
    <div className="checkout">
      {/* <div className="brand">
        <img src={logo_letters} alt="Brand main logo" className="brand__logo" />
      </div> */}
      <div className="contact">
        <div className="contact__information">
          <h1 className="contact__title">Contact information</h1>
          <CheckoutForm />
        </div>
      </div>
      <div className="summary">
        <h1 className="summary__title">Products summary</h1>
        <div>
          {items.map((item) => (
            <p>{item.title}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
