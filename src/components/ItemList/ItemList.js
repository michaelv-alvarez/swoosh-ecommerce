import React from "react";
import Item from "../Item/Item";
const ItemList = ({ items, categoryName }) => {
  return (
    <>
      <h1 className="products__path">
        {categoryName ? `Products  >  ${categoryName}` : "All products"}
      </h1>

      <div className="products">
        {items.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </div>
    </>
  );
};

export default ItemList;
