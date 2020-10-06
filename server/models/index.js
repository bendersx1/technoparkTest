import config from "config";
import Sequelize from "sequelize";
import { product } from "./product.model.js";
import { article } from "./article.model.js";

const dbConnString = config.get("dbConnString");

const sequelize = new Sequelize(dbConnString, {
  logging: false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.product = product(sequelize, Sequelize);
db.article = article(sequelize, Sequelize);

db.product.hasMany(db.article);
db.article.belongsTo(db.product, {
  foreignKey: "productId"
});

export { db };
