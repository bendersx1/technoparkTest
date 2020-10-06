import { db } from "../models/index.js";
const Product = db.product;
const Article = db.article;

const getAllProducts = (req, res) => {
  return Product.findAll({
    include: { model: Article }
  })
    .then(products => {
      res.json(products);
    })
    .catch(err => res.status(404).json({ message: "products not found" }));
};

const createProduct = (req, res) => {
  const product = req.body;
  return Product.create({
    title: product.title,
    description: product.description
  })
    .then(product => {
      res.json({ message: "product created", product });
    })
    .catch(err => res.status(400).json({ message: err.message }));
};

const updateProduct = (req, res) => {
  const id = req.params.id;
  return Product.update(req.body, {
    where: { id }
  })
    .then(count => {
      const message = count > 0 ? "product updated" : "can't update product";
      res.json({ message, id });
    })
    .catch(err => res.status(400).json({ message: err.message }));
};

const deleteProduct = (req, res) => {
  const id = req.params.id;
  return Product.destroy({
    where: { id }
  })
    .then(count => {
      const message = count > 0 ? "product deleted" : "product not exists";
      res.json({ message, id });
    })
    .catch(err => res.status(400).json({ message: err.message }));
};

const getAllArticles = (req, res) => {
  return Article.findAll({
    include: { model: Product }
  })
    .then(articles => {
      res.json(articles);
    })
    .catch(err => res.status(404).json({ message: "articles not found" }));
};

const createArticle = (req, res) => {
  return Article.create(req.body)
    .then(product => {
      res.json({ message: "product created", product });
    })
    .catch(err => res.status(400).json({ message: err.message }));
};

const updateArticle = (req, res) => {
  const id = req.params.id;
  return Article.update(req.body, {
    where: { id }
  })
    .then(count => {
      const message = count > 0 ? "article updated" : "can't update article";
      res.json({ message, id });
    })
    .catch(err => res.status(400).json({ message: err.message }));
};

const deleteArticle = (req, res) => {
  const id = req.params.id;
  return Article.destroy({
    where: { id }
  })
    .then(count => {
      const message = count > 0 ? "product deleted" : "product not exists";
      res.json({ message, id });
    })
    .catch(err => res.status(400).json({ message: err.message }));
};

export {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getAllArticles,
  createArticle,
  updateArticle,
  deleteArticle
};
