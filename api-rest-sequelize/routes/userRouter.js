const { createUser, getAllUsers } = require("../controllers/userController");

const router = require("express").Router();

router.get("/", getAllUsers);
router.post("/", createUser);

//EJERCICIO
router.get("/:id");

module.exports = router;
