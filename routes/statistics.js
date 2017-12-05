var express = require('express')
var router = express.Router()
var PvModel = require('../service/pv-service')

router.get('/pv', function (req, res, next) {
  PvModel.query(req.query.date, function (err, message) {
    if (err) {
      console.log(err)
    }
    res.json({ Data: message })
  })
})

module.exports = router
