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
    if (id) {
      const productDetail = getProductDetail(id);
      setProduct(productDetail);
    }
  }, [id]);
  return (
    <>
      <Item {...product} showAs={"Detail"} />
    </>
  );
};

export default ItemDetailContainer;
