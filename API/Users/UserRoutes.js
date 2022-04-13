import express from "express";
import jwt from "express-jwt";

import {
  verifyLogin,
  register,
  getUserInformation,
  createUserCart,
  addProduct,
  getCart,
  updateCart,
  deleteProductFromCart,
  deleteCart,
} from "./UsersControllers.js";
import { SECRET_KEY } from "./UserEncrypt.js";

const TOKEN_VERIFY = jwt({ secret: SECRET_KEY, algorithms: ["HS256"] });

export const userRouter = express.Router();

userRouter.post("/login", verifyLogin);
userRouter.post("/register", register);
userRouter.get("/user", TOKEN_VERIFY, getUserInformation);
userRouter.put("/cart", TOKEN_VERIFY, createUserCart);
userRouter.post("/products", TOKEN_VERIFY, addProduct);
userRouter.get("/cart", TOKEN_VERIFY, getCart);
userRouter.post("/cart", TOKEN_VERIFY, updateCart);
userRouter.delete("/products/:id", TOKEN_VERIFY, deleteProductFromCart);
userRouter.delete("/cart", TOKEN_VERIFY, deleteCart);
