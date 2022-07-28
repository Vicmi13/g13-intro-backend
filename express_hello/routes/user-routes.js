import express from "express";

import { connection } from "../config/db.js";
import {
  createUserRefactor,
  getAllUsers,
  getAllUsersRefactor,
  getUserById,
} from "../controllers/UserController.js";
import { checkParamsCreate } from "../middlewares/generic.js";
import UserService from "../services/User_Fake.js";

const userRouter = express.Router();
const userService = new UserService();

// /users/v2 REFACTOR USANDO CONTROLLERS
userRouter.get("/v3", getAllUsersRefactor);

userRouter.get("/v2", async (req, res) => {
  try {
    const data = await getAllUsers();
    res.status(200).json({
      message: "Users in refactor recovered",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
      data: "",
    });
  }
});

userRouter.get("/", async (req, res) => {
  //  GET /users
  const ownerResponse = () => {
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

  /**
   * 
   * EJEMPLO de wrapper de promesa
   * para manejar connection.query()
   
  const vetResponse = () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM veterinarians", (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  };
  */

  try {
    const resultOwner = await ownerResponse();
    // const resultVet = await vetResponse();

    res.status(200).json({
      message: "retrieve all users",
      data: resultOwner,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
      data: "",
    });
  }

  console.log("FIN DE CALLBACK ==== ");
});

userRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const userFound = await getUserById(id);
    res.status(200).json({
      message: "User found",
      data: userFound,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Error recover user by Id ${error}`,
      data: "",
    });
  }
});

userRouter.post("/", checkParamsCreate, async (req, res) => {
  const { name, lastName, email } = req.body;

  // const objBody = {name, lastName, email}
  try {
    const result = await userService.createUser({ name, lastName, email });
    res.status(201).json({
      message: result,
      data: {
        name,
        lastName,
        email,
        // EJERCICIO arreglar bug para que el Id sea dinamico
        id: 3,
      },
    });
  } catch (error) {
    console.log(error, "error create user");
  }
});

userRouter.post("/v3", checkParamsCreate, createUserRefactor);

userRouter.put("/:id", async (req, res) => {
  console.log(req.body);
  const { name, lastName, email } = req.body;
  const { id } = req.params;

  try {
    // EJERCICIO arreglar bug para validar params del body que solo existen en User (name, lastName, email)
    const userUpdated = await userService.updateUser(id, req.body);

    console.log(userUpdated, "userUpdated");
    res.status(200).json({
      message: "User updated successfully",
      data: {
        name,
        lastName,
        email,
      },
    });
  } catch (error) {
    console.log(error, "error update user");
  }
});

userRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await userService.deleteUser(id);
    console.log(result);
    res.status(200).json({
      message: "User deleted successfully",
      data: {},
    });
  } catch (error) {
    res.status(400).json({
      message: "Bad request: id not found",
    });
    console.log(error, "User id not found");
  }
});

export { userRouter };
