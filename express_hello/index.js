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

// MIDDLEWARES GLOBALES
// app.use((req,res, next) => {
//   req.greeting = 'hola middlewares 💻'
//   console.log('primer midd creado')
//   next()
// })
// app.use( (_,__,next ) => {
//   console.log('fecha', new Date())
//   next()
// })

const userService = new UserService();

//  define el verbo HTTP con 2 params; la ruta '/' y el handler
app.get("/", (req, res) => {
  res.status(200).json({
    message: "retrieve all users",
    data: userService.users,
  });
});

app.post("/", ((req,res,next) => {
  console.log('url', req.baseUrl)
}), async (req, res) => {
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


app.delete('/:id',  async (req, res) => {
  const { id } = req.params
  try {
    const result = await userService.deleteUser(id)
    console.log(result)
    res.status(200).json({
      message: 'User deleted successfully',
      data: {}
    })
  } catch (error){
    res.status(400).json({
      message: 'Bad request: id not found'
    })
    console.log(error, 'User id not found')
  }
})

// Se define el puerto y callback
app.listen(3001, function () {
  console.log("Application running");
});
