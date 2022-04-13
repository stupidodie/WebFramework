import {
  verify,
  registerUser,
  getUser,
  createCart,
  addOrUpdateProduct,
  findCart,
  UpdateWholeCart,
  deleteProduct,
  deleteWholeCart,
} from "./Usersmodel.js";

export async function verifyLogin(req, res) {
  try {
    const userInformation = req.body;
    const token = await verify(userInformation);
    res.json({ token });
  } catch (error) {
    res.status(401.1).send(error.message);
  }
}

export async function register(req, res) {
  try {
    const userInformation = req.body;
    const token = await registerUser(userInformation);
    res.json({ token });
  } catch (error) {
    res.status(401.1).send(error.message);
  }
}
export async function getUserInformation(req, res) {
  try {
    const userId = req.user.userId;
    const userInformation = await getUser(userId);
    res.json({ userInformation });
  } catch (error) {
    res.status(401.1).send(error.message);
  }
}

export async function createUserCart(req, res) {
  try {
    createCart(req.user.userId);
    res.status(200).send("Cart created");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function addProduct(req, res) {
  try {
    const productId = req.body.productId;
    const productNumber = req.body.productNumber;
    const userId = req.user.userId;
    await addOrUpdateProduct(productId, productNumber, userId);
    res.status(200).send("Product added to cart");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function getCart(req, res) {
  try {
    const userId = req.user.userId;
    const cart = await findCart(userId);
    res.json({ cart });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function updateCart(req, res) {
  try {
    const newcart = req.body.cart;
    const userId = req.user.userId;
    await UpdateWholeCart(newcart, userId);
    res.status(200).send("Cart updated");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function deleteProductFromCart(req, res) {
  try {
    const productId = req.params.id;
    const userId = req.user.userId;
    await deleteProduct(productId, userId);
    res.status(200).send("Product deleted from cart");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function deleteCart(req, res) {
  try {
    const userId = req.user.userId;
    await deleteWholeCart(userId);
    res.status(200).send("Cart deleted");
  } catch (error) {
    res.status(400).send(error.message);
  }
}
