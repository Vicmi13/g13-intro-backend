import { connection } from "../config/db.js";
import { userCreated, usersRecovered } from "../services/User.js";

// GET

const getAllUsersRefactor = async (req, res) => {
  try {
    const users = await usersRecovered();
    return res.status(200).json({
      message: "Users with /services recover successfully",
      data: users,
    });
  } catch (error) {
    console.log("error in refactor", error);
    res.status(500).json({
      message: error,
      data: "",
    });
  }
};

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM owners", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// GET :id
const getUserById = (idUser) => {
  return new Promise((resolve, reject) => {
    const id = [idUser];
    connection.query("Select * from owners where id = ?;", id, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

//POST
const createUser = (user) => {
  return new Promise((resolve, reject) => {
    // const stmtParams = [POSITION1 = primer ?, POSITION2 = segundo ?,  POSITION3 = tercer ?]
    const stmtParams = [user.name, user.lastName];
    connection.query(
      "INSERT INTO owners (name, lastName) VALUES (?,?);",
      stmtParams,
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      }
    );

    connection.query();
  });
};

const createUserRefactor = (req, res) => {
  // call User service
  userCreated(req.body)
    .then((data) => {
      res
        .status(201)
        .json({ message: "Users with /services created successfully", data });
    })
    .catch((error) => {
      console.log("error in create user with /services", error);
      res.status(500).json({
        message: error,
        data: "",
      });
    });
};

export {
  getAllUsers,
  getAllUsersRefactor,
  getUserById,
  createUser,
  createUserRefactor,
};
