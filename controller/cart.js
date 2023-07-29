const cartData = require("../model/cart");

exports.postCart = (req, res, next) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res
      .status(400)
      .json({ error: "name, price are required fields!" });
  }

  cartData
    .create({
      name: name,
      price: price,
    })
    .then((createdExpense) => {
      res
        .status(201)
        .json({ message: "cartData added successfully!", data: createdExpense });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
    cartData
      .findAll()
      .then((result) => {
        res
          .json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
