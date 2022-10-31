import React from "react";
import Product from "../Product/Product";

const ItemList = ({ items }) => {
  return (
    <div className="products">
      {items.map((item) => {
        return <Product key={item.id} {...item} />;
      })}
    </div>
  );
};

export default ItemList;
