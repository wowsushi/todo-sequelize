const express = require('express')
const router = express.Router()

router.use('/', require('./home.js'))
router.use('/users', require('./users.js'))
router.use('/todos', require('./todos.js'))

module.exports = router
