const express = require('express')
const router = express.Router()

const db = require('../models')
const Todo = db.Todo
const User = db.User
const { authenticated } = require('../config/auth.js')

router.get('/new', authenticated, (req, res) => {
  res.render('new')
})

router.post('/', authenticated, (req, res) => {
  Todo.create({
    name: req.body.name,
    done: false,
    UserId: req.user.id
  })
  .then(todo => { return res.redirect('/') })
  .catch(err => { return res.status(204).json(err) })
})

router.get('/:id', authenticated, (req, res) => {
  User.findByPk(req.user.id)
  .then( user => {
    if (!user) throw new Error("user not found")

    return Todo.findOne({
      where: {
        UserId: req.user.id,
        Id: req.params.id
      }
    })
  })
  .then(todo => { return res.render('detail', { todo: todo }) })
  .catch(err => { return res.status(422).json(err) })
})

router.get('/:id/edit', authenticated, (req, res) => {
  User.findByPk(req.user.id)
  .then( user => {
    if (!user) throw new Error("user not found")

    return Todo.findOne({
      where: {
        UserId: req.user.id,
        Id: req.params.id
      }
    })
  })
  .then(todo => { return res.render('edit', { todo: todo }) })
  .catch(err => { return res.status(422).json(err) })
})

router.put('/:id', authenticated, (req, res) => {
  Todo.findOne({
    where: {
      Id: req.params.id,
      UserId: req.user.id
    }
  })
  .then(todo => {
    todo.name = req.body.name
    todo.done = req.body.done === 'on'

    return todo.save()
  })
  .then( todo => {
    return res.redirect(`/todos/${req.params.id}`)
  })
})

router.delete('/:id/delete', authenticated, (req, res) => {
  User.findByPk(req.user.id)
  .then(user => {
    if (!user) throw new Error("user not found")

    return Todo.destroy({
      where: {
        id: req.params.id,
        UserId: req.user.id
      }
    })
  })
  .then(todo => {
    return res.redirect('/')
  })
   .catch(err => { return res.status(422).json(err) })
})

module.exports = router
