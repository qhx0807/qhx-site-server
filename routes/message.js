var express = require('express')
var router = express.Router()
var MessageModel = require('../service/message-service')

router.get('/message', function(req, res, next) {
  MessageModel.query(function(err, message) {
    if (err) {
      console.log(err)
    }
    res.json({ Data: message })
  })
})

router.post('/message', function(req, res, next) {
  var et = new MessageModel(req.body)
  et.save(function(err) {
    if (err) {
      res.json({ Data: err })
    } else {
      res.json({ OK: 'ok' })
    }
  })
})

router.put('/message', function(req, res, next) {
  MessageModel.edit(req.body.id, req.body, function(err) {
    if (err) {
      res.json({ Data: err })
    }else{
      res.json({ OK: 'ok' })
    }
  })
})

router.delete('/message', function(req, res, next) {
  MessageModel.delete(req.query.id, function(err) {
    if (err) {
      res.json({ Data: err })
    } else {
      res.json({ OK: 'ok' })
    }
  })
})

module.exports = router
