const { Todos } = require("../../models");

const index = async (req, res, next) => {
  const result = await Todos.findAll();

  res.json({ data: result });
};

module.exports = { index };
