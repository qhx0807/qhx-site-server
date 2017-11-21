var express = require('express')
var router = express.Router()
var UsersModel = require('../service/user-service')


router.get('/user', function(req, res, next) {
  UsersModel.query(function(err, users) {
    if (err) {
      console.log(err)
    }
    res.json({Data: users})
  })
})


router.post('/login', function(req, res, next) {
  UsersModel.login(req.body.name, req.body.pwd, function(err, users) {
    if (err) {
      console.log(err)
    }
    res.json({Data: users})
  })
})

router.put('/user', function(req, res, next) {
  UsersModel.update(req.body.id, req.body.data, function(err, docs) {
    if (err) {
      console.log(err)
    }
    res.json({Data: docs})
  })
})

router.delete('/user', function(req, res, next) {
  UsersModel.update(req.body.id, function(err, docs) {
    if (err) {
      console.log(err)
    }
    res.json({Data: docs})
  })
})

router.post('/user', function (req, res, next) {
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
