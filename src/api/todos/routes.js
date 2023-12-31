const { index, getOne, create, update, destoy } = require("./controller");

// validation imports
const { validate } = require("express-validation");
const {
  storeTodoRequest,
  updateTodoRequest,
  getOneTodoRequest,
} = require("./validation");

const router = require("express").Router();

router.get("/todos", index);
router.post("/todos", validate(storeTodoRequest, { keyByField: true }), create);

router.get(
  "/todos/:id",
  validate(getOneTodoRequest, { keyByField: true }),
  getOne
);
router.put(
  "/todos/:id",
  validate(updateTodoRequest, { keyByField: true }),
  update
);
router.delete("/todos/:id", destoy);

module.exports = router;
