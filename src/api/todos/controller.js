const { Todo, Item } = require("../../models");

const index = async (req, res, next) => {
  const result = await Todo.findAll({
    attributes: ["id", "name"],
    include: {
      model: Item,
      attributes: ["id", "name"],
    },
  });

  res.json({ data: result });
};

module.exports = { index };
