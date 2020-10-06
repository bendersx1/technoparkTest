import express from "express";
import config from "config";
import { router } from "./routes/index.js";
import { db } from "./models/index.js";

const PORT = config.get("port");

if (process.env.NODE_ENV === "development") {
  db.sequelize.sync({ force: true }).then(() => {
    console.log("Database cleared.");
  });
}

const app = express();

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);

app.use(express.json());

app.use("/", router);
