var express = require('express')
var router = express.Router()

var ArchiveModel = require('../service/archive-service')


router.get('/archives', function(req, res, next) {
  ArchiveModel.query(function(err, archives) {
    if (err) {
      console.log(err)
    }
    res.json({Data: archives})
  })
})


module.exports = router