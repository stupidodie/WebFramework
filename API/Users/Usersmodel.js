import * as fs from "fs/promises";
import { encryptUserId } from "./UserEncrypt.js";

const USERS_FILE = "./data/Users.json";
const CART_FILE = "./data/Cart.json";

//This file is not correct as it doesn't work with users
export async function verify(userInformation) {
  let users = await readAllUsers();
  let user = users.find(
    (currUser) =>
      currUser.Id === parseInt(userInformation.Id) &&
      currUser.Password === userInformation.Password
  );
  if (user === undefined) {
    throw new Error("User not found or password is incorrect");
  }
  let token = await encryptUserId(user.Id);
  return token;
}

export async function registerUser(userInformation) {
  let users = await readAllUsers();
  let user = users.find(
    (currUser) => currUser.Id === parseInt(userInformation.Id)
  );
  if (user !== undefined) {
    throw new Error("User already exists");
  }
  let token = await encryptUserId(userInformation.Id);
  users.push(userInformation);
  await saveUsers(users);
  return token;
}

export async function getUser(userId) {
  let users = await readAllUsers();
  let user = users.find((currUser) => currUser.Id === userId);
  return user;
}

async function saveUsers(users = []) {
  let Users = JSON.stringify(users);
  await fs.writeFile(USERS_FILE, Users);
}

async function saveCart(carts = []) {
  let Carts = JSON.stringify(carts);
  await fs.writeFile(CART_FILE, Carts);
}

export async function readAllUsers() {
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

export async function readAllCarts() {
  try {
    let cartTxt = await fs.readFile(CART_FILE);
    let carts = JSON.parse(cartTxt);
    return carts;
  } catch (err) {
    if (err.code === "ENOENT") {
      await save([]);
      return [];
    } else throw err;
  }
}

export async function findCart(userId) {
  let carts = await readAllCarts();
  let userCart = carts.find((currCart) => currCart.userId === userId);
  if (userCart === undefined) {
    await createCart(userId);
    return [];
  }
  return userCart.cart;
}

export async function createCart(userId) {
  let carts = await readAllCarts();
  let userCart = carts.find((currCart) => currCart.userId === userId);

  if (userCart === undefined) {
    userCart = { userId, cart: [] };
    carts.push(userCart);
    await saveCart(carts);
  }
}

async function operateCart(userId, operation) {
  let carts = await readAllCarts();
  let userCart = carts.find((currCart) => currCart.userId === userId);

  if (userCart === undefined) {
    userCart = { userId, cart: [] };
    userCart.cart = await operation(userCart.cart);

    carts.push(userCart);
  } else {
    userCart.cart = await operation(userCart.cart);
  }

  await saveCart(carts);
}

export async function addOrUpdateProduct(productId, productNumber, userId) {
  let addOrUpdate = async function (userCart) {
    let product = userCart.find(
      (currProduct) => currProduct.productId === parseInt(productId)
    );
    product = { productId, productNumber };
    userCart.push(product);
    return userCart;
  };
  await operateCart(userId, addOrUpdate);
}

export async function UpdateWholeCart(newcart, userId) {
  let updateCart = async function (userCart) {
    userCart = newcart;
    return userCart;
  };
  await operateCart(userId, updateCart);
}

export async function deleteWholeCart(userId) {
  let deleteCart = async function (userCart) {
    userCart = [];
    return userCart;
  };
  await operateCart(userId, deleteCart);
}

export async function deleteProduct(productId, userId) {
  let del = async function (userCart) {
    let product = userCart.find(
      (currProduct) => currProduct.productId === parseInt(productId)
    );
    if (product !== undefined) {
      userCart.splice(userCart.indexOf(product), 1);
    }
    return userCart;
  };
  await operateCart(userId, del);
}