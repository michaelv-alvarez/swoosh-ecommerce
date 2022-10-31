import React from "react";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div className="products">
      {items.map((item) => {
        return <Item key={item.id} {...item} />;
      })}
    </div>
  );
};

export default ItemList;
