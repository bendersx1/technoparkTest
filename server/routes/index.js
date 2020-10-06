import express from "express";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getAllArticles,
  createArticle,
  updateArticle,
  deleteArticle
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/products", getAllProducts);

router.post("/products", createProduct);

router.patch("/products/:id", updateProduct);

router.delete("/products/:id", deleteProduct);

router.get("/articles", getAllArticles);

router.post("/articles", createArticle);

router.patch("/articles/:id", updateArticle);

router.delete("/articles/:id", deleteArticle);

export { router };
