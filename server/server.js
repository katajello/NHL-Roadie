#!/usr/bin/env node
var port = process.env.PORT || 3000

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
var cheerio = require('cheerio')


var sampleArenas = [
  {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/ACC_on_Bay_St_and_CN_Tower.JPG/240px-ACC_on_Bay_St_and_CN_Tower.JPG", arena: "Air Canada Centre", location: ""}
]

// mongoose
mongoose.connect('mongodb://localhost/nhl-roadie', function(err) {
  if(err) return console.log(err)
  console.log("Connected to MongoDB (NHL-Roadie)")
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
app.use(require('express-session')({
    secret: 'woootman',
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use('/user/', routes)

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../client', 'index.html'))
})

// app.get('/scrape-test', function(req, res) {
//   var url = 'https://en.wikipedia.org/wiki/List_of_National_Hockey_League_arenas'
//   // var scraper = new Scraper(url);
//   // scraper.scrape().on('done', function(err, statusCode, content){
//   //   if (err){
//   //     console.error(err);
//   //   }
//   //   else {
//   //     console.log(statusCode, content);
//   //
//   //
//   //   }
//   // });
//   request(url, function(err, response, body) {
//
//     $ = cheerio.load(body)
//     var arenas = []
//     $('.wikitable tbody tr').each(function(i, el) {
//       $(el).children('td').each(function(i, el){
//         console.log(el.html())
//       })
//     })
//   })
//
//
//   // $ = cheerio.load(content)
//   // res.json($('.wikitable'))
// })

// error hndlers
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use(function(err, req, res) {
  res.status(err.status || 500)
  res.end(JSON.stringify({
    message: err.message,
    error: {}
  }))
})

app.listen(port, function() {
  console.log("Listening for requests on port:", port)
})
