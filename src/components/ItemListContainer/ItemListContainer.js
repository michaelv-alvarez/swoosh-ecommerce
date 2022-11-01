import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../../utils/getProducts";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getProducts()
      .then((response) => {
        setItems(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {items.length === 0 ? (
        <h3 className="shop__loader">Cargando...</h3>
      ) : (
        <ItemList
          items={category ? getProductsByCategory(category) : items}
          categoryName={category}
        />
      )}
    </>
  );
};

export default ItemListContainer;
