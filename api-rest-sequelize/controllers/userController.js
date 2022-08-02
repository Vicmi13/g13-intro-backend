const { DataTypes } = require("sequelize");

const { sequelize } = require("../config/sequelize");
const User = require("../models/user");

const getAllUsers = async (_, res) => {
  try {
    /**1ra forma de implementacion */
    // const result = await User(sequelize, DataTypes).findAll();

    /**2da forma de implementacion */
    const result = await User.findAll();
    console.log("user results", result);
    res.status(200).json({
      message: "Recover all users",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  try {
    const result = await User.create({ firstName, lastName, email });
    console.log("result", result.dataValues);
    res.status(201).json({
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllUsers, createUser };
