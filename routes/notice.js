var express = require('express')
var router = express.Router()
var NoticeMOdel = require('../service/notice-service')

router.get('/notice', function(req, res, next) {
  NoticeMOdel.query(function(err, notice) {
    if (err) {
      console.log(err)
    }
    res.json({ Data: notice })
  })
})

router.post('/notice', function(req, res, next) {
  var et = new NoticeMOdel(req.body)
  et.save(function(err) {
    if (err) {
      res.json({ Data: err })
    } else {
      res.json({ OK: 'ok' })
    }
  })
})

router.put('/notice', function(req, res, next) {
  NoticeMOdel.edit(req.body._id, req.body, function(err) {
    if (err) {
      res.json({ Data: err })
    } else {
      res.json({ OK: 'ok' })
    }
  })
})

router.delete('/notice', function(req, res, next) {
  NoticeMOdel.delete(req.query.id, function(err) {
    if (err) {
      res.json({ Data: err })
    } else {
      res.json({ OK: 'ok' })
    }
  })
})

module.exports = router
