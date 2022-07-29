const User = require("../models/user");

const getAllUsers = async (_, res) => {
  try {
    console.log("here");
    const result = await User.findAll();
    res.status(201).json({
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
    res.status(201).json({
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllUsers, createUser };
