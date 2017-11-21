var express = require('express')
var router = express.Router()
var NoticeMOdel = require('../service/notice-service')

router.get('/notice', function (req, res, next) {
  NoticeMOdel.query(function (err, notice) {
    if (err) {
      console.log(err)
    }
    res.json({Data: notice})
  })
})

router.post('/addNotice', function (req, res, next) {
  var noticeInsert = new NoticeMOdel(req.body)
  noticeInsert.save(function (err) {
    if (err) {
      res.json({Data: err})
    }else {
      res.json({OK: 'ok'})
    }
  })

})

module.exports = router
