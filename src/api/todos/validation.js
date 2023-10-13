const { Joi } = require("express-validation");

module.exports = {
  storeTodoRequest: {
    body: Joi.object({
      name: Joi.string().required(),
    }),
  },
  updateTodoRequest: {
    body: Joi.object({
      name: Joi.string().required(),
    }),
    params: Joi.object({
      id: Joi.number().required(),
    }),
  },

  getOneTodoRequest: {
    params: Joi.object({
      id: Joi.number().required(),
    }),
  },
};
