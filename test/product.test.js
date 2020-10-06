// process.env.NODE_ENV = "test";

// let mongoose = require("mongoose");
import { product } from "../server/models/product.model.js";

import chai from "chai";
import chaiHttp from "chai-http";
import server from "../server/server.js";
import { db } from "../server/models/index.js";
// import Sequalize from "sequelize";
// let chai = require("chai");
// let chaiHttp = require("chai-http");
// let server = require("../server");
const should = chai.should();

chai.use(chaiHttp);
//Наш основной блок
describe("Products", () => {
  beforeEach(done => {
    //Перед каждым тестом чистим базу
    db.sequelize.sync({ force: true }).then(() => {
      console.log("Drop and re-sync db.");
    });
  });

  describe("/GET products", () => {
    it("it should GET all the products", done => {
      chai
        .request(server)
        .get("/products")
        .end((err, res) => {
          console.log(res.status);
          res.should.have.status(200);
          // res.body.should.be.a("array");
          // res.body.length.should.be.eql(0);
          done();
        });
    });
  });
});
