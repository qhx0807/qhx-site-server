var express = require('express')
var router = express.Router()
var NoteModel = require('../service/note-service')

router.get('/notes', function(req, res, next) {
  NoteModel.query(function(err, notes) {
    if (err) {
      console.log(err)
    }
    res.json({ Data: notes })
  })
})

router.post('/notes', function(req, res, next) {
  var et = new NoteModel(req.body)
  et.save(function(err) {
    if (err) {
      res.json({ Data: err })
    } else {
      res.json({ OK: 'ok' })
    }
  })
})

router.put('/notes', function(req, res, next) {
  NoteModel.edit(req.body._id, req.body, function(err) {
    if (err) {
      res.json({ Data: err })
    } else {
      res.json({ OK: 'ok' })
    }
  })
})

router.delete('/notes', function(req, res, next) {
  NoteModel.delete(req.query.id, function(err) {
    if (err) {
      res.json({ Data: err })
    } else {
      res.json({ OK: 'ok' })
    }
  })
})

module.exports = router
