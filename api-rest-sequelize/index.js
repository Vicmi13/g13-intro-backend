const express = require("express");

const { sequelize } = require("./config/sequelize");
const userRouter = require("./routes/userRouter");

const app = express();
const router = express.Router();

//MOVER a constants
const PORT = 3000;
const URL_BASE = "/api-sequelize/g13/v1";

/** ======== MIDDLEWARES ======== */
app.use(express.json());

app.get("/", (_, res) => {
  res.status(200).json({
    message: "API sequelize running 🙌",
  });
});

/** ======== RUTAS ======== */
router.use(`/users`, userRouter);
app.use(router);

// PROBAR CONEXICON MYSQL - SEQUELIZE
const testing = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

testing();

// sequelize
//   .authenticate()
//   .then(() => console.log("Connection has been established successfully."))
//   .catch((error) => console.log("Unable to connect to the database:", error));

app.listen(PORT, () => {
  console.log(`Servidor running in port ${PORT}`);
});
