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

router.delete('/log', function(req, res, next) {
  LogModel.delete(req.query.id, function(err) {
    if (err) {
      res.json({ Data: err })
    } else {
      res.json({ OK: 'ok' })
    }
  })
})


module.exports = router