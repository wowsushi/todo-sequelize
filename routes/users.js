const express = require('express')
const router = express.Router()
const passport = require('passport')
const bcrypt = require('bcryptjs')

const db = require('../models')
const Todo = db.Todo
const User = db.User

router.get('/login', (req,res) => {
  res.render('login')
})

router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login'
  })(req, res, next)
})

router.get('/register', (req,res) => {
  res.render('register')
})

router.post('/register', (req,res) => {
  const { name, email, password, password2 } = req.body


  User.findOne({ where: {email: email} }).then( user => {
    if (user) {
      console.log('User already exist.')
      res.render('register', {
        name,
        email,
        password,
        password2
      })
    } else {
      const newUser = new User({
        name,
        email,
        password
      })

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash( newUser.password, salt, (err, hash) => {
          if (err) throw err

          newUser.password = hash

          newUser
          .save().then(user => {
            res.redirect('/')
          })
          .catch(err => {
              console.log(err)
          })
        })
      })
    }
  })
})

router.get('/logout', (req,res) => {
  req.logout()
  res.redirect('/')
})

module.exports = router
