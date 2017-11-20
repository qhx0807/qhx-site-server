var express = require('express')
var router = express.Router()

var Tag = require('../models/tagModel')


router.get('/tags', function(req, res, next) {
    Tag.query(function(err, tags) {
    if (err) {
      console.log(err)
    }
    res.json({Data: tags})
  })
})


module.exports = router