var express = require('express')
var router = express.Router()
var passport = require('passport')

var User = require('../models/User.js')
var Arena = require('../models/Arena.js')

router.post('/register', function(req, res) {
  User.register(new User({ username: req.body.username }),
    req.body.password, function(err, account) {
    if (err) {
      return res.status(500).json({
        err: err
      })
    }
    passport.authenticate('local')(req, res, function () {
      return res.status(200).json({
        status: 'Registration successful!'
      })
    })
  })
})

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err)
    }
    if (!user) {
      return res.status(401).json({
        err: info
      })
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).json({
          err: 'Could not log in user'
        })
      }
      res.status(200).json({
        status: 'Login successful!',
        user: user
      })
    })
  })(req, res, next)
})

router.get('/logout', function(req, res) {
  req.logout()
  res.status(200).json({
    status: 'Bye!'
  })
})

router.get('/status', function(req, res) {
  if (!req.isAuthenticated()) {
    return res.status(200).json({
      status: false
    })
  }
  res.status(200).json({
    status: true,
    user: req.user
  })
})

router.get('/arenas', function(req, res){
  Arena.find({}, function (err, arenas) {
    if(err) return console.log(err);
    res.json(arenas)
  })
})

router.post('/:id/add-arena', function(req, res) {
  console.log(req.body)

  User.findById(req.params.id, function(err, user) {
    if(err) {res.json({message: "couldn't find user..."})} else {
      user.arenas.push(req.body.arenaId)
      user.save(function(err, user) {
        if(err) {res.json({message: "couldn't add arena..."})} else {
          User.populate(user, {path: 'arenas'}, function(err, user) {
            // res.json({message: "arena added", user: user})
          })
          User.find({}).populate('arenas').exec(function (err, user) {
            if (err) return console.log(err);
            res.json(user)
          })
        }
      })
    }
  })

})


module.exports = router
