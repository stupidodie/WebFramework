import express from "express";

// import { userrouter } from "./Users/UserRoutes.js";
import { productsrouter } from "./Products/ProductsRoutes.js";
const app = express();
const PORT = 3000;

// This is a built-in middleware function in Express. It parses incoming requests with JSON payloads.
app.use(express.json());

// Middleware for user router
// app.use(userrouter);

// Middleware for products router
app.use(productsrouter);

app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});

// For invalid routes
app.use((req, res) => res.status(404).send("404! This is an invalid URL."));
