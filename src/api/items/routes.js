const router = require("express").Router();
const { create, update, destroy, getOne, moveItem } = require("./controller");

// validation imports
const { validate } = require("express-validation");
const {
  storeItemRequest,
  updateItemRequest,
  getOneItemRequest,
  moveItemRequest,
} = require("./validation");

// declare route
router.get(
  "/items/:id",
  validate(getOneItemRequest, { keyByField: true }),
  getOne
);
router.post("/items", validate(storeItemRequest, { keyByField: true }), create);
router.put(
  "/items/:id",
  validate(updateItemRequest, { keyByField: true }),
  update
);
router.delete("/items/:id", destroy);

// custom
router.put(
  "/items/move/:id",
  validate(moveItemRequest, { keyByField: true }),
  moveItem
);

module.exports = router;
