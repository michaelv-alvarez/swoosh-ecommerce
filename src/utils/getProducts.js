import { randProduct } from "@ngneat/falso";

const getProducts = () => {
  let initialProducts = [];

  for (let i = 0; i < 10; i++) {
    initialProducts.push(randProduct());
  }

  let productsPromise = new Promise((res) => {
    setTimeout(() => {
      res(initialProducts);
    }, 2000);
  });
  return productsPromise;
};

export default getProducts;
