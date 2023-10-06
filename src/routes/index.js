const router = require("express").Router();

const { response } = require("../../app");
// all routes import
const todosRoutes = require("../api/todos/routes");
const itemsRoutes = require("../api/items/routes");

// import error handler
const { ExpressValidation } = require("../errors/ValidateErrors");
const { notFound, handleError } = require("../errors");

// all use route
router.use(todosRoutes);
router.use(itemsRoutes);

// handle error route
router.use(ExpressValidation);
router.use(notFound);
router.use(handleError);

module.exports = router;
