import fs from "fs/promises";
const PRODUCTS_FILE = "./data/Products.json";

export async function getAll() {
  try {
    let productsTxt = await fs.readFile(PRODUCTS_FILE);
    let products = JSON.parse(productsTxt);
    return products;
  } catch (err) {
    if (err) {
      return []; 
    } 
  }
}

function findProduct(productArray, Id) {
  return productArray.findIndex(
    (currproduct) => currproduct.productId === Id
  );
}

export async function getByID(productId) {
  let productArray = await getAll();
  let index = findProduct(productArray, productId);
  if (index === -1)
    throw new Error(`product with ID:${productId} doesn't exist`);
  else return productArray[index];
}
