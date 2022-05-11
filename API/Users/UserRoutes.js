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
userRouter.put("/cart/:userId(\\d+)", createUserCart);
userRouter.post("/cart/:userId(\\d+)", addProduct);
userRouter.get("/cart/:userId(\\d+)/", getCart);
userRouter.delete("/cart/:userId(\\d+)/products/:id", deleteProductFromCart);
