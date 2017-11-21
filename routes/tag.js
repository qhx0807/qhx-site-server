var express = require('express')
var router = express.Router()
var TagModel = require('../service/tag-service')


router.get('/tags', function(req, res, next) {
  TagModel.query(function(err, tags) {
    if (err) {
      console.log(err)
    }
    res.json({Data: tags})
  })
})


module.exports = router