import * as fs from "fs/promises";
const USERS_FILE = "./data/Users.json";
const CART_FILE = "./data/Cart.json";
//This file is not correct as it doesn't work with users

export async function getAll() {
  try {
    let usersTxt = await fs.readFile(USERS_FILE);
    let users = JSON.parse(usersTxt);
    return users;
  } catch (err) {
    if (err.code === "ENOENT") {
      await save([]);
      return [];
    } else throw err;
  }
}

function findCart(cartArray, cartName) {
  return cartArray.findIndex((currCart) => currCart.cartName === cartName);
}

export async function update(cartName, cart) {
  let cartArray = await getAll();
  let index = findCart(cartArray, cartName);
  if (index === -1) throw new Error(`Cart with name:${cartName} doesn't exist`);
  else {
    cartArray[index] = cart;
    await save(cartArray);
  }
}

//Create a new Cart for a specific users
export async function createCart(cartName, cart) {
  let cartArray = await getAll();
  let index = findCart(cartArray, cartName);
  if (index !== -1)
    throw new Error(`Cart with name:${cartName} already exists`);
  else {
    cartArray.push(cart);
    await save(cartArray);
  }
}

//Put a product in the cart for a specific users
export async function addProduct(cartName, product) {
  let cartArray = await getAll();
  let index = findCart(cartArray, cartName);
  if (index === -1) throw new Error(`Cart with name:${cartName} doesn't exist`);
  else {
    cartArray[index].products.push(product);
    await save(cartArray);
  }
}

//Delete a product from the cart for a specific users
export async function deleteProduct(cartName, product) {
  let cartArray = await getAll();
  let index = findCart(cartArray, cartName);
  if (index === -1) throw new Error(`Cart with name:${cartName} doesn't exist`);
  else {
    cartArray[index].products = cartArray[index].products.filter(
      (currProduct) => currProduct.name !== product.name
    );
    await save(cartArray);
  }
}

//Get the cart content for a specific user
export async function getCart(cartName) {
  let cartArray = await getAll();
  let index = findCart(cartArray, cartName);
  if (index === -1) throw new Error(`Cart with name:${cartName} doesn't exist`);
  else return cartArray[index];
}
