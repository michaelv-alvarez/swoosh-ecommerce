import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const productsCollection = collection(db, "products");

export const getAllProducts = async () => {
  const request = getDocs(productsCollection);
  const response = await request;
  const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return data;
};

const consulta = getDocs(productsCollection);
consulta
  .then((resultado) => {
    const products = resultado.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return products;
  })
  .catch((error) => {
    console.log(error);
  });
