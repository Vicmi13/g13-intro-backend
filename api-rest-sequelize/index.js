const express = require("express");

const { sequelize } = require("./config/sequelize");

const app = express();

//MOVER a constants
const PORT = 3000;

/** ======== MIDDLEWARES ======== */
app.use(express.json());

app.get("/", (_, res) => {
  res.status(200).json({
    message: "API sequelize running 🙌",
  });
});

// PROBAR CONEXICON MYSQL - SEQUELIZE
try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.listen(PORT, () => {
  console.log(`Servidor running in port ${PORT}`);
});
