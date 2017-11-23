var express = require('express')
var router = express.Router()
var PhotoModel = require('../service/photo-service')

router.get('/photo', function(req, res, next) {
  PhotoModel.query(function(err, photos) {
    if (err) {
      console.log(err)
    }
    res.json({ Data: photos })
  })
})

router.post('/photo', function(req, res, next) {
  var et = new PhotoModel(req.body)
  et.save(function(err) {
    if (err) {
      res.json({ Data: err })
    } else {
      res.json({ OK: 'ok' })
    }
  })
})

router.put('/photo', function(req, res, next) {
  PhotoModel.edit(req.body._id, req.body, function(err) {
    if (err) {
      res.json({ Data: err })
    }else{
      res.json({ OK: 'ok' })
    }
  })
})

router.delete('/photo', function(req, res, next) {
  PhotoModel.delete(req.query.id, function(err) {
    if (err) {
      res.json({ Data: err })
    } else {
      res.json({ OK: 'ok' })
    }
  })
})

module.exports = router
