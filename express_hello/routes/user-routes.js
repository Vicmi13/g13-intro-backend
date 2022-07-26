import express, { application } from "express";
import { checkParamsCreate } from "../middlewares/generic.js";
import UserService from "../services/User.js";
const userRouter = express.Router();

const userService = new UserService();

userRouter.get("/", (req, res) => {
  res.status(200).json({
    message: "retrieve all users",
    data: userService.users,
  });
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