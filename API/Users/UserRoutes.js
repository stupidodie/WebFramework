import express from "express";

import { getAllUsers, createUserCart } from "./UsersControllers.js";

export const userrouter = express.Router();

userrouter.get("/allUsers", getAllUsers);
userrouter.get("/createCart/:id(\\d+)/", createUserCart);
