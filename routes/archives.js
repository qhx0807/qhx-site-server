var express = require('express')
var router = express.Router()
var ArchiveModel = require('../service/archive-service')

router.get('/archive', function(req, res, next) {
  ArchiveModel.query(function(err, archive) {
    if (err) {
      console.log(err)
    }
    res.json({ Data: archive })
  })
})

router.post('/archive', function(req, res, next) {
  var et = new ArchiveModel(req.body)
  et.save(function(err) {
    if (err) {
      res.json({ Data: err })
    } else {
      res.json({ OK: 'ok' })
    }
  })
})

router.put('/archive', function(req, res, next) {
  ArchiveModel.edit(req.body._id, req.body, function(err) {
    if (err) {
      res.json({ Data: err })
    } else {
      res.json({ OK: 'ok' })
    }
  })
})

router.delete('/archive', function(req, res, next) {
  ArchiveModel.delete(req.query.id, function(err) {
    if (err) {
      res.json({ Data: err })
    } else {
      res.json({ OK: 'ok' })
    }
  })
})

module.exports = router
