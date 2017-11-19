var express = require('express')
var router = express.Router()

var mongoose = require('mongoose')
var Users = require('../models/usersModel')


router.get('/users', function(req, res, next) {
  Users.fetch(function(err, users) {
    if (err) {
      console.log(err)
    }
    res.json({Data: users})
  })
})


router.post('/login', function(req, res, next) {
  Users.login(req.body.name, req.body.pwd, function(err, users) {
    if (err) {
      console.log(err)
    }
    res.json({Data: users})
  })
})

router.post('/userUpdate', function(req, res, next) {
  Users.updateUser(req.body.id, req.body.data, function(err, docs) {
    if (err) {
      console.log(err)
    }
    res.json({Data: docs})
  })
})


module.exports = router
