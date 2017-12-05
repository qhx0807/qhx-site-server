var express = require('express')
var router = express.Router()
var PvModel = require('../service/pv-service')
var LogModel = require('../service/log-service')
var NoteModel = require('../service/note-service')
var PhotoModel = require('../service/photo-service')

router.get('/sta', function (req, res, next) {
  var obj = {}
  PvModel.fetch().then(function (pv) {
    obj.pv = pv.length
    return LogModel.fetch()
  }).then(function (log) {
    obj.api = log.length
    return NoteModel.query()
  }).then(function (note) {
    var like = 0
    note.forEach(function (item) {
      like += item.like
    })
    obj.like = like
    obj.note = note.length
    return PhotoModel.query()
  }).then(function (photo) {
    obj.photo = photo.length
    var y = new Date().getFullYear()
    var m = new Date().getMonth() + 1
    var d = new Date().getDate()
    var date = y + '-' + m + '-' + d
    return PvModel.query(date)
  }).then(function (tpv) {
    obj.tpv = tpv.length
    res.json(obj)
  })
})

module.exports = router
