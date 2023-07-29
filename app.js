const express = require("express");

const sequelize = require("./database");

const cartController = require('./controller/cart')

const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/add-cartdata", cartController.postCart);

app.use("/get-cartdata", cartController.getCart);

sequelize
  .sync()
  .then((result) => {
    console.log(result);
  })
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
