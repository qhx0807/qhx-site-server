var express = require('express')
var router = express.Router()
var TagModel = require('../service/tag-service')

router.get('/tags', function(req, res, next) {
  TagModel.query(function(err, tags) {
    if (err) {
      console.log(err)
    }
    res.json({ Data: tags })
  })
})

router.post('/tags', function(req, res, next) {
  var TagInsert = new TagModel(req.body)
  TagInsert.save(function(err) {
    if (err) {
      res.json({ Data: err })
    } else {
      res.json({ OK: 'ok' })
    }
  })
})

router.put('/tags', function(req, res, next) {
  TagModel.edit(req.body.id, req.body, function(err, docs) {
    if (err) {
      res.json({ Data: err })
    }else{
      res.json({ OK: 'ok' })
    }
  })
})

router.delete('/tags', function(req, res, next) {
  TagModel.delete(req.body.id, function(err, docs) {
    if (err) {
      res.json({ Data: err })
    } else {
      res.json({ OK: 'ok' })
    }
  })
})

module.exports = router
