const router = require('express').Router()


const { response } = require('../../app')
// all routes import
const todosRoutes = require('../api/todos/routes') 



// all use route
router.use(todosRoutes)




module.exports = router;
