import { getAll, getByID } from "./products.model.js";

export async function getAllProducts(req, res) {
  try {
    let allProducts = await getAll();
    res.json({ allProducts });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function getProduct(req, res) {
  try {
    let id = parseInt(req.params.id);
    let product = await getByID(id);
    res.json(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
}
