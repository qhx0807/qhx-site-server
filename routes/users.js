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

router.post('/user', function(req, res, next) {
  var UserInsert = new UserModel(req.body)
  UserInsert.save(function(err) {
    if (err) {
      res.json({ Data: err })
    } else {
      res.json({ OK: 'ok' })
    }
  })
})

router.put('/user', function(req, res, next) {
  UsersModel.edit(req.body.id, req.body, function(err, docs) {
    if (err) {
      res.json({ Data: err })
    }else{
      res.json({ OK: 'ok' })
    }
  })
})

router.delete('/user', function(req, res, next) {
  UsersModel.delete(req.query.id, function(err, docs) {
    if (err) {
      res.json({Data: err})
    }else{
      res.json({OK: 'ok'})
    }
  })
})

module.exports = router
