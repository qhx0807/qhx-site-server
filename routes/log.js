var express = require('express')
var router = express.Router()
var LogModel = require('../service/log-service')


router.get('/log', function(req, res, next) {
  LogModel.query(function(err, log) {
    if (err) {
      console.log(err)
    }
    res.json({Data: log})
  })
})


module.exports = router