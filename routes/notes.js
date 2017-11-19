var express = require('express')
var router = express.Router()

var mongoose = require('mongoose')
var Notes = require('../models/notesModel')


//查询所有数据
router.get('/', function(req, res, next) {
    Notes.fetch(function(err, notes) {
    if (err) {
      console.log(err)
    }
    res.json({Data: notes})
  })
})

module.exports = router