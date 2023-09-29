const { index } = require('./controller')

const router = require('express').Router()



router.get('/todos', index)




module.exports = router