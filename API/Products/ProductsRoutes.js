import express from "express";

import {
  getallcategories,
  getAllProducts,
  getProduct,
  getAllProductByCat,
} from "./ProductsControllers.js";

// middleware specific to this route

// route handlers
export const productsrouter = express.Router();

productsrouter.use(express.json());

productsrouter.get("/products", getAllProducts);
productsrouter.get("/:id", getProduct);
productsrouter.get("/categories", getallcategories);
productsrouter.get("/prodcat/:id", getAllProductByCat);

// productsrouter.get("/allcat", getcategories);

// productsrouter.route("/").get(getAllProducts);
// productsrouter.route("/:id").get(getProduct);
// productsrouter.get("/allcat").get(getcategories);

// // Source: https://stackoverflow.com/questions/11258442/express-routes-parameter-conditions
// app.get('/:id(\\d+)/', function (req, res){
//   // req.params.id is now defined here for you
// });
