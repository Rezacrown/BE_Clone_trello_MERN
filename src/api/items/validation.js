const { Joi } = require("express-validation");

module.exports = {
  storeItemRequest: {
    body: Joi.object({
      name: Joi.string().required(),
      TodoId: Joi.number().required(),
    }),
  },

  updateItemRequest: {
    body: Joi.object({
      name: Joi.string().required(),
    }),
    params: Joi.object({
      id: Joi.number().required(),
    }),
  },

  getOneItemRequest: {
    params: Joi.object({
      id: Joi.number().required(),
    }),
  },

  moveItemRequest: {
    body: Joi.object({
      targetTodoId: Joi.number().required(),
    }),
    params: Joi.object({
      id: Joi.number().required(),
    }),
  },
};
