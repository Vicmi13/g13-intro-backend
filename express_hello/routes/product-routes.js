import express from "express";

const productRouter = express.Router();

productRouter.get("/", (req, res) => {
  res.status(200).json({
    message: "recover products",
    data: {},
  });
});

productRouter.post("/", async (req, res) => {
  res.status(200).json({
    message: "product created",
    data: {},
  });
});

export { productRouter };
