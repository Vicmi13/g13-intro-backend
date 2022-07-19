// importamos express
import express from "express";
//  const name = require('module') NO  FUNCIONA CON "type": "module",

// guarda funciones o metodos para trabajar con req, res, middlewares, handles, routers
const app = express();

// localhost:3001/ => ruta raiz => USERS

// AQUI VAMOS VAN NUESTROS MIDDLEWARES
// express.json() AQUI SE EJECUTA EL middleware
app.use(express.json()); // CON use() definimos que va a trabajar como midd de nuestro backend

//  define el verbo HTTP con 2 params; la ruta '/' y el handler
app.get("/", (_, res) => {
  res.status(200).json({
    message: "retrieve all users",
    data: [
      {
        id: 1,
        name: "user harcoded",
        lastName: "Torres",
        email: "victor@gmail.com",
      },
      { id: 2, name: "Isaac", lastName: "Huanca", email: "isaaac@gmail.com" },
    ],
  });
});

app.post("/", (req, res) => {
  const { name, lastName, email } = req.body;
  res.status(201).json({
    message: "User created successfully",
    data: {
      name,
      lastName,
      email,
      id: 3,
    },
  });
});

// : nos sirven para recupear params de la URL
// nombreParam es con el que accedemos al valor en req.params
app.delete("/:id", (req, res) => {
  console.log("mi parametro", req.params.id);
  res.status(200).json({
    message: "User deleted succesfully",
    data: {},
  });
});

app.put("/", (req, res) => {});

// Se define el puerto y callback de finalizacion
app.listen(3001, function () {
  console.log("Application running");
});
