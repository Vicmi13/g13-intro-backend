const checkParamsCreate = (req, res, next) => {
  console.log("body", req.body);
  const { body } = req;
  if (
    body.hasOwnProperty("name") &&
    body.hasOwnProperty("lastName") &&
    body.hasOwnProperty("email")
  ) {
    next();
  } else {
    res.status(400).json({ message: "error missing param(s)", data: {} });
  }
};

export { checkParamsCreate };
