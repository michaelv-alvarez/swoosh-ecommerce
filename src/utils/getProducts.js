import { randProduct } from "@ngneat/falso";
let initialProducts = [];

for (let i = 0; i < 10; i++) {
  initialProducts.push(randProduct());
}
export const getProducts = () => {
  let productsPromise = new Promise((res) => {
    setTimeout(() => {
      res(initialProducts);
    }, 2000);
  });
  return productsPromise;
};

export const getCategories = () => {
  let categories = initialProducts.map((product) => {
    return product.category;
  });
  let categoriesNoRepeat = [...new Set(categories)];
  return categoriesNoRepeat;
};

export const getProductsByCategory = (category) => {
  let productsByCategory = initialProducts.filter((product) => {
    return product.category === category;
  });
  return productsByCategory;
};

export const convertToPath = (category) => {
  return category.toLowerCase().replace(/\s/g, "-");
};
