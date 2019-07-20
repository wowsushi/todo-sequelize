const express = require('express')
const router = express.Router()

const db = require('../models')
const Todo = db.Todo
const User = db.User

router.get('/login', (req,res) => {
  res.render('login')
})

router.post('/login', (req,res) => {
  res.send('login')
})

router.get('/register', (req,res) => {
  res.render('register')
})

router.post('/register', (req,res) => {
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }).then(user => {
    res.redirect('/')
  })
})

router.post('/logout', (req,res) => {
  res.send('logout')
})

module.exports = router
