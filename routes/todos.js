const express = require('express')
const router = express.Router()

const db = require('../models')
const Todo = db.Todo
const User = db.User
const { authenticated } = require('../config/auth.js')

router.get('/', authenticated, (req, res) => {
  res.render('detail')
})

router.get('/new', authenticated, (req, res) => {
  res.render('new')
})

router.post('/', authenticated, (req, res) => {
  res.send('add new')
})

router.get('/:id/edit', authenticated, (req, res) => {
  res.render('edit')
})

router.put('/', authenticated, (req, res) => {
  res.send('edit')
})

router.delete(':id/delete', authenticated, (req, res) => {
  res.send('delete')
})

module.exports = router
