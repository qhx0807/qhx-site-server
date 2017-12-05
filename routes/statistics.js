var express = require('express')
var router = express.Router()
var PvModel = require('../service/pv-service')
var LogModel = require('../service/log-service')

router.get('/sta', function (req, res, next) {
  var obj = {}
  PvModel.fetch().then(function (pv) {
    obj.pv = pv.length
    return LogModel.fetch()
  }).then(function (log) {
    obj.api = log.length
    res.json(obj)
  })
})

module.exports = router
