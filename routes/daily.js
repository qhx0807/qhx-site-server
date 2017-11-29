var express = require('express')
var router = express.Router()
var request = require('request')

router.get('/daily', function (req, res, next) {
  request('http://open.iciba.com/dsapi', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json({Data: body})
    }else {
      res.json({error: 'error'})
    }
  })
})

module.exports = router
