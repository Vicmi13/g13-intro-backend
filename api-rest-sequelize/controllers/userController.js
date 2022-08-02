const { DataTypes } = require("sequelize");

const { sequelize } = require("../config/sequelize");
const Role = require("../models/role");
const User = require("../models/user");

const getAllUsers = async (_, res) => {
  try {
    /**1ra forma de implementacion */
    // const result = await User(sequelize, DataTypes).findAll();

    /**2da forma de implementacion */
    const result = await User.findAll({ include: Role });

    // SE INCLUYEN VARIOS MODELOS
    // User.findAll({include: [ {model: name1}, {model: name2 } ] })
    console.log("user results", result);
    res.status(200).json({
      message: "Recover all users",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error recover users", data: error });
  }
};

const createUser = async (req, res) => {
  const { firstName, lastName, email, roleId } = req.body;
  try {
    const result = await User.create({ firstName, lastName, email, roleId });
    console.log("result", result.dataValues);
    res.status(201).json({
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error create user", data: error });
  }
};

module.exports = { getAllUsers, createUser };
