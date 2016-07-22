#!/usr/bin/env node
var port = process.env.PORT || 3000
var dotenv = require('dotenv').load({silent: true})
// dependencies
var express = require('express')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var expressSession = require('express-session')
var mongoose = require('mongoose')
var hash = require('bcrypt-nodejs')
var path = require('path')
var passport = require('passport')
var passportConfig = require('./config/passport.js')
// var Scraper = require('node-scraper')
var request = require('request')
// var bootstrap = require('angular-ui-bootstrap')
// var cheerio = require('cheerio')
var seed = require('../seeds/seeds.js')



// mongoose
mongoose.connect(process.env.DB_URL, function(err) {
  if(err) return console.log(err)
  console.log("Connected to MongoDB (NHL-Roadie)")
  seed()
})

// user schema/model
var User = require('./models/User.js')

// create instance of express
var app = express()

// require routes
var routes = require('./routes/api.js')

// define middleware
app.use(express.static(path.join(__dirname, '../client')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
// app.use(bootstrap)
app.use(require('express-session')({
    secret: 'woootman',
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static(path.join(__dirname, '../client')))

// routes
app.use('/user', routes)

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../client', 'index.html'))
})


// error hndlers
// app.use(function(req, res, next) {
//   var err = new Error('Not Found')
//   err.status = 404
//   next(err)
// })
//
// app.use(function(err, req, res) {
//   res.status(err.status || 500)
//   res.end(JSON.stringify({
//     message: err.message,
//     error: {}
//   }))
// })

app.listen(port, function() {
  console.log("Listening for requests on port:", port)
})
