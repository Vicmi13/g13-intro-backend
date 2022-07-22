import express from "express";

const itemRouter = express.Router();

itemRouter.get("/", (req, res) => {
  console.log("queries", req.query);
  const { page, limit } = req.query;

  // SE crea el query de item y se manda valores
  res.status(200).json({
    message: "retrieve items",
    data: {},
  });
});

itemRouter.post("/", async (req, res) => {
  res.status(200).json({
    message: "item created",
    data: {},
  });
});

itemRouter.put("/:id", async (req, res) => {
  res.status(200).json({
    message: "item updated",
    data: {},
  });
});

itemRouter.delete("/:id", async (req, res) => {
  res.status(200).json({
    message: "item deleted",
    data: {},
  });
});

export { itemRouter };
