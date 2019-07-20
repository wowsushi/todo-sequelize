const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session')
const passport = require('passport')

const app = express()

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use(session({
  secret: 'fw;flspjswfsfs',
  resave: 'false',
  saveUninitialized: 'false'
}))
app.use(passport.initialize())
app.use(passport.session())
require('./config/passport')(passport)
app.use((req, res, next) => {
  res.locals.user = req.user
  next()
})


app.use('/', require('./routes/index'))

app.listen(3000, () => {
  console.log(`Express is listening on http://localhost:3000`)
})
