var express = require('express')
var router = express.Router()

var mongoose = require('mongoose')
var Log = require('../models/logModel')


router.get('/log', function(req, res, next) {
    Log.query(function(err, log) {
    if (err) {
      console.log(err)
    }
    res.json({Data: log})
  })
})


module.exports = router