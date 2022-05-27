import fs from "fs/promises";
const PRODUCTS_FILE = "./data/Products.json";

const drinks = ["coffee", "tea", "juice"];
const snacks = ["chips", "candy", "cookies"];
const meals = ["noodle", "rice", "forozen food"];
const allCategories = ["drinks", "snacks", "meals"];
export async function getAll() {
  try {
    //inbuilt Node function readFile
    let productsTxt = await fs.readFile(PRODUCTS_FILE);
    //string to JSON
    let products = JSON.parse(productsTxt);
    return products;
  } catch (err) {
    if (err.code === "ENOENT") {
      // file does not exitss
      await save([]); // create a new file with empty array
      return []; // return empty array
    } // // cannot handle this exception, so rethrow
    else throw err;
  }
}

function findProduct(productArray, Id) {
  return productArray.findIndex((currproduct) => currproduct.productId === Id);
}

export async function findcatProduct(productArray, cat) {
  let catprod = [];
  if (cat in allCategories) {
    switch (cat) {
      case "drinks":
        catprod = productArray.filter(
          (currproduct) => currproduct.category in drinks
        );
        break;
      case "snacks":
        catprod = productArray.filter(
          (currproduct) => currproduct.category in snacks
        );
        break;
      case "meals":
        catprod = productArray.filter(
          (currproduct) => currproduct.category in meals
        );
        break;
    }
    return catprod;
  }
  for (let i = 1; i < productArray.length; i++) {
    if (productArray[i].category in cat) catprod.push(productArray[i]);
  }
  return catprod;
}

export async function getByID(productId) {
  let productArray = await getAll();
  let index = findProduct(productArray, productId);
  if (index === -1)
    throw new Error(`product with ID:${productId} doesn't exist`);
  else return productArray[index];
}

export async function getBycategory(cat) {
  let productArray = await getAll();
  let prod = findcatProduct(productArray, cat);
  if (prod === -1)
    throw new Error(`product with ID:${productId} doesn't exist`);
  else return prod;
}

export async function getcategories() {
  return { drinks, snacks, meals };
}

async function save(products = []) {
  let productsTxt = JSON.stringify(products);
  await fs.writeFile(PRODUCTS_FILE, productsTxt);
}

//  let productArray = await getAll();
//  return productArray.map((e) => e.category);

// export async function getByCategory(list, category) {
//   return list.filter((item) => item.category === category);
// }

// //Get all details about a specific product
// export async function getDetails(productId) {
//   let productArray = await getAll();
//   let index = findProduct(productArray, productId);
//   if (index === -1)
//     throw new Error(`product with ID:${productId} doesn't exist`);
//   else return productArray[index];
// }
