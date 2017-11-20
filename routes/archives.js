var express = require('express')
var router = express.Router()

var Archives = require('../models/archivesModel')


router.get('/archives', function(req, res, next) {
    Archives.query(function(err, archives) {
    if (err) {
      console.log(err)
    }
    res.json({Data: archives})
  })
})


module.exports = router