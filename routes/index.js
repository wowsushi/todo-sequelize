const express = require('express')
const router = express.Router()

router.get('/', (req, res)  => {
  res.render('home')
})
router.use('/users', require('./users.js'))

module.exports = router
