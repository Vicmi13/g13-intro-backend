import express from "express";

const itemRouter = express.Router();

itemRouter.get("/", (req, res) => {
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
