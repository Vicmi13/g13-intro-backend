// importamos express
import express from "express";
import UserService from "./services/User.js";
//  const name = require('module') NO  FUNCIONA CON "type": "module",

// guarda funciones o metodos para trabajar con req, res, middlewares, handles, routers
const app = express();

// localhost:3001/ => ruta raiz => USERS

// AQUI VAMOS VAN NUESTROS MIDDLEWARES
// express.json() AQUI SE EJECUTA EL middleware
app.use(express.json()); // CON use() definimos que va a trabajar como midd de nuestro backend

const userService = new UserService();

//  define el verbo HTTP con 2 params; la ruta '/' y el handler
app.get("/", (_, res) => {
  res.status(200).json({
    message: "retrieve all users",
    data: userService.users,
  });
});

app.post("/", async (req, res) => {
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

app.put("/:id", async (req, res) => {
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

// : nos sirven para recupear params de la URL
// nombreParam es con el que accedemos al valor en req.params
app.delete("/:id", (req, res) => {
  console.log("mi parametro", req.params.id);

  // EJERCICIO crear metodo en UserService para eliminarUsuario)
  res.status(200).json({
    message: "User deleted succesfully",
    data: {},
  });
});

// Se define el puerto y callback
app.listen(3001, function () {
  console.log("Application running");
});
