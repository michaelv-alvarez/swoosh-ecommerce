import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getProductsByCategory } from "../../utils/getProducts";
import { getAllProducts } from "../../utils/firebaseFetching";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  const fetchProducts = async () => {
    const data = await getAllProducts();
    setItems(data);
  };
  useEffect(() => {
    fetchProducts();
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
