import express from "express";
import config from "config";
import Sequalize from "sequelize";
import { router } from "./routes/index.js";
import { db } from "./models/index.js";

const PORT = config.get("port");
// const dbConnString = config.get("dbConnString");
// const sequelize = new Sequalize(dbConnString, {
//   logging: false
// });

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

const app = express();

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);

app.use(express.json());

app.use("/", router);

export default app;
