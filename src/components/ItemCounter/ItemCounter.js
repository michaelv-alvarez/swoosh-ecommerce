import React from "react";
import { useState } from "react";
import { GoPlus, GoDash } from "react-icons/go";
import useCartContext from "../../context/CartState";
const counter = ({ counter, setCounter }) => {
  const handleLess = () => {
    counter > 0 && setCounter(counter - 1);
  };
  const handleAdd = () => {
    setCounter(counter + 1);
  };
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
