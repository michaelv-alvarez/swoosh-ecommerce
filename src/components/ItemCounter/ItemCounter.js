import React from "react";
import { GoPlus, GoDash } from "react-icons/go";

const counter = ({ counter, setCounter, showAs, productId }) => {
  console.log(productId);
  const handleLess = () => {
    counter > 0 && setCounter(counter - 1);
  };
  const handleAdd = () => {
    setCounter(counter + 1);
  };
  if (showAs === "cart") {
    return (
      <div className="ItemCounter ItemCounter--cart">
        <button
          className="counter__btn counter__btn--cart"
          onClick={handleLess}
          disabled={counter === 1 ? true : false}
        >
          <GoDash />
        </button>
        <span className="counter__results counter__results--cart">
          {counter}
        </span>
        <button className="counter__btn counter__btn--cart" onClick={handleAdd}>
          <GoPlus />
        </button>
      </div>
    );
  }
  return (
    <div className="ItemCounter">
      <button
        className="counter__btn"
        onClick={handleLess}
        disabled={counter === 1 ? true : false}
      >
        <GoDash />
      </button>
      <span className="counter__results">{counter}</span>
      <button className="counter__btn" onClick={handleAdd}>
        <GoPlus />
      </button>
    </div>
  );
};

export default counter;
