const Sequelize = require("sequelize");
const {
  mysqlCredentials: { DB_NAME, DB_PASS, DB_USER },
} = require("../constants/index");

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  dialect: "mysql",
  dialectOptions: {
    // FUNCIONO 🤞🏽
    timezone: "-05:00",
  },
});

module.exports = { sequelize };
