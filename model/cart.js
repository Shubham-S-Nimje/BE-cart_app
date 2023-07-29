const Sequelize = require("sequelize").Sequelize;

const sequelize = require("../database");

const cartData = sequelize.define("cartData", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = cartData
