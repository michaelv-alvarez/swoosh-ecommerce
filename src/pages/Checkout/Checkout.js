import React, { useRef } from "react";
import { addNewOrder } from "../../utils/firebaseFetching";
import { useCartContext } from "../../context/CartState";
import { serverTimestamp } from "firebase/firestore";
const Checkout = () => {
  const { items } = useCartContext();
  // const [orderId, setId] = useState(null);

  const refName = useRef();
  const refLast = useRef();
  const refEmail = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const formData = new FormData(e.target);
    // Object.fromEntries(formData);
    const fullName = `${refName.current.value} ${refName.current.value}`;
    const email = refEmail.current.value;
    const order = {
      purchaserData: {
        name: fullName,
        email: email,
      },
      products: items,
      date: serverTimestamp(),
    };
    addNewOrder(order);
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input ref={refName} type="text" />
        <label htmlFor="last">Last</label>
        <input ref={refLast} type="text" />
        <label htmlFor="email">Email</label>
        <input ref={refEmail} type="text" />

        <button>Complete purchase</button>
      </form>
    </div>
  );
};

export default Checkout;
