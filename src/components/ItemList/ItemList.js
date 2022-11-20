import React from "react";
import Item from "../Item/Item";
const ItemList = ({ products, category }) => {
  return (
    <>
      {/* <h1 className="products__path">
        {category ? `Shop  >  ${category}` : "Shop"}
      </h1> */}
      <h1 className="products__path">Shop</h1>

      <div className="products">
        {products.map((product) => {
          return <Item key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default ItemList;
