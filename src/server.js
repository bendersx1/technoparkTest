import express from "express";
import config from "config";

const PORT = config.get("port");

var app = express();

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}/api`)
);
