import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../utils/firebaseFetching";
import Item from "../Item/Item";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    const data = await getProductById(id);
    setProduct(data);
  };

  useEffect(() => {
    id && fetchProduct();
  }, [id]);
  return (
    <>
      {product ? (
        <Item product={{ id, ...product }} showAs={"Detail"} />
      ) : (
        <h5>Cargando detalles...</h5>
      )}
      {/* <Item {...product} showAs={"Detail"} /> */}
    </>
  );
};

export default ItemDetailContainer;
