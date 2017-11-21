var express = require('express')
var router = express.Router()
var NoteModel = require('../service/note-service')


//查询所有数据
router.get('/', function(req, res, next) {
  NoteModel.query(function(err, notes) {
    if (err) {
      console.log(err)
    }
    res.json({Data: notes})
  })
})

module.exports = router