const { Item, Todo } = require("../../models");

module.exports = {
  create: async (req, res, next) => {
    try {
      const { name, TodoId } = req.body;
      const resut = await Item.create({ name, TodoId });

      return res
        .status(201)
        .json({ data: resut, message: "Success create Item" });
    } catch (error) {
      next(error);
    }
  },

  getOne: async (req, res, next) => {
    try {
      const { id } = req.params;

      const result = await Item.findByPk(id);

      return res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  },

  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name } = req.body;

      const result = await Item.findByPk(id);

      result.name = name;

      await result.save();

      return res.status(200).json({ message: "Success updated", data: result });
    } catch (error) {
      next(error);
    }
  },

  destroy: async (req, res, next) => {
    try {
      const { id } = req.params;

      const result = await Item.destroy({
        where: { id },
      });

      return res.status(200).json({ message: "Success deleted", data: result });
    } catch (error) {
      next(error);
    }
  },

  moveItem: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { targetTodoId } = req.body;

      const item = await Item.findOne({
        where: { id },
        attributes: ["name", "id"],
        include: {
          model: Todo,
          attributes: ["name", "id"],
        },
      }); // cari item berdasarkan id

      // cari target todonya untuk dimove berdasarkan hasil drag
      const todo = await Todo.findOne({
        where: { id: targetTodoId },
        attributes: ["name", "id"],
        include: {
          model: Item,
          attributes: ["name", "id"],
        },
      });

      item.TodoId = todo.id;
      const result = await item.save();

      return res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  },
};
