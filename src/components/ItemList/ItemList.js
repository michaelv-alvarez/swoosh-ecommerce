import React from "react";
import Item from "../Item/Item";
const ItemList = ({ products, categoryName }) => {
  return (
    <>
      <h1 className="products__path">
        {categoryName ? `Products  >  ${categoryName}` : "All products"}
      </h1>

      <div className="products">
        {products.map((product) => {
          return <Item key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default ItemList;
