import React from "react";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
};

export default ItemList;
