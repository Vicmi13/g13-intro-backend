// importamos express
import express from "express";
import mysql from "mysql2";

//  const name = require('module') NO  FUNCIONA CON "type": "module" en package.json,
import { itemRouter } from "./routes/item-routes.js";
import { productRouter } from "./routes/product-routes.js";
import { userRouter } from "./routes/user-routes.js";
import { DB, HOST, USER, PASSWORD } from "./config/db";

/** =========== MYSQL  =========== */

const connection = dbConfig.mysql.createConnection({
  host: HOST,
  user: USER,
  database: DB,
  password: PASSWORD,
  // default 3306
});

console.log("connection db", connection);
// guarda funciones o metodos para trabajar con req, res, middlewares, handles, routers
const app = express();
const router = express.Router();
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

//  define el verbo HTTP con 2 params; la ruta '/' y el handler
// app.get(
//   ("/",
//   (req, res) => {
//     res.status(200).json({
//       message: "retrieve all users",
//       data: userService.users,
//     });
//   })
// );

// localhost:3001/v1/api/g13  /users
// localhost:3001/v5/api/g13  /items

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server g13 corriendo🔥",
    data: {},
  });
});

app.use("/api/v1/g13", router);

// router.use => '/api/v1/g13' 👈🏽 YA TRAE ESTO
router.use("/users", userRouter);
router.use("/items", itemRouter);
router.use("/products", productRouter);

app.use(router);

// Se define el puerto y callback
app.listen(3001, function () {
  console.log("Application running");
});
