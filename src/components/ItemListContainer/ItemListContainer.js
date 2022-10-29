import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProducts from "../../utils/getProducts";
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
      <h1>Productos</h1>
      {items.length === 0 ? <h2>Cargando...</h2> : <ItemList items={items} />}
    </>
  );
};

export default ItemListContainer;
