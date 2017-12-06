var express = require('express')
var router = express.Router()
var request = require('request')
var PvModel = require('../service/pv-service')

// 获取ip city
router.get('/ip', function (req, res, next) {
  request('http://ip.chinaz.com/getip.aspx', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json({Data: body})
    }else {
      res.json({error: 'error'})
    }
  })
})

router.post('/pv', function (req, res, next) {
  var et = new PvModel(req.body)
  et.save(function (err) {
    if (err) {
      res.json({ Data: err })
    } else {
      res.json({ OK: 'ok' })
    }
  })
})

router.get('/pv', function (req, res, next) {
  PvModel.query(req.query.date, function (err, message) {
    if (err) {
      console.log(err)
    }
    res.json({ Data: message })
  })
})

module.exports = router
