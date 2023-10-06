const { Todo, Item } = require("../../models");

const index = async (req, res, next) => {
  try {
    const result = await Todo.findAll({
      attributes: ["id", "name"],
      include: {
        model: Item,
        attributes: ["id", "name"],
      },
    });

    return res.json({ data: result });
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Todo.findByPk(id, {
      attributes: ["name", "id"],
      include: {
        model: Item,
        attributes: ["name", "id"],
      },
    });

    return res.json({ data: result });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const { name } = req.body;

    const result = await Todo.create({
      name,
    });

    return res.json({ data: result }).status(201);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const result = await Todo.findByPk(id);

    result.name = name;
    await result.save();

    return res.json({ data: result }).status(200);
  } catch (error) {
    next(error);
  }
};

const destoy = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Todo.destroy({ where: { id: id } });

    return res
      .json({ data: result, message: "succes delete data" })
      .status(200);
  } catch (error) {
    next(error);
  }
};

module.exports = { index, getOne, create, update, destoy };
