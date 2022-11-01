import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../../utils/getProducts";
import Item from "../Item/Item";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    id &&
      getProductDetail(id)
        .then((response) => {
          setProduct(response);
        })
        .catch((error) => console.log(error));
  }, [id]);
  return (
    <>
      {product ? (
        <Item {...product} showAs={"Detail"} />
      ) : (
        <h5>Cargando detalles...</h5>
      )}
      {/* <Item {...product} showAs={"Detail"} /> */}
    </>
  );
};

export default ItemDetailContainer;
