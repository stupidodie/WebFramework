import {
  verify,
  registerUser,
  getUser,
  createCart,
  addProductInCart,
  findCart,
  deleteProduct,
} from "./Usersmodel.js";

export async function verifyLogin(req, res) {
  try {
    const userInformation = req.body;
    await verify(userInformation);
    res.json({ message: "Login successful" });
  } catch (error) {
    res.status(401.1).send(error.message);
  }
}

export async function register(req, res) {
  try {
    const userInformation = req.body;
    await registerUser(userInformation);
    res.json({ message: "Registration successful" });
  } catch (error) {
    res.status(401.1).send(error.message);
  }
}
export async function getUserInformation(req, res) {
  try {
    const userId = parseInt(req.params.userId);
    const userInformation = await getUser(userId);
    res.json({ userInformation });
  } catch (error) {
    res.status(401.1).send(error.message);
  }
}

export async function createUserCart(req, res) {
  try {
    await createCart(parseInt(req.params.cartId));
    res.status(200).send("Cart created");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function addProduct(req, res) {
  try {
    const productId = parseInt(req.body.productId);
    const productNumber = parseInt(req.body.productNumber);
    const cartId = parseInt(req.params.cartId);
    await addProductInCart(productId, productNumber, cartId);
    res.status(200).send("Product added to cart");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function getCart(req, res) {
  try {
    const cartId =parseInt(req.params.cartId);
    const cart = await findCart(cartId);
    res.json({ cart });
  } catch (error) {
    res.status(400).send(error.message);
  }
}


export async function deleteProductFromCart(req, res) {
  try {
    const productId = parseInt(req.params.id);
    const cartId = parseInt(req.params.cartId);
    await deleteProduct(productId, cartId);
    res.status(200).send("Product deleted from cart");
  } catch (error) {
    res.status(400).send(error.message);
  }
}
