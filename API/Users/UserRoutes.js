import express from "express";

import {
  verifyLogin,
  register,
  getUserInformation,
  createUserCart,
  addProduct,
  getCart,
  deleteProductFromCart,
} from "./UsersControllers.js";

export const userRouter = express.Router();

userRouter.put("/user", verifyLogin);
userRouter.post("/user", register);
userRouter.get("/user/:userId(\\d+)", getUserInformation);
userRouter.put("/cart/:cartId(\\d+)", createUserCart);
userRouter.post("/cart/:cartId(\\d+)", addProduct);
userRouter.get("/cart/:cartId(\\d+)/", getCart);
userRouter.delete("/cart/:cartId(\\d+)/products/:id", deleteProductFromCart);
