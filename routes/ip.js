var express = require('express')
var router = express.Router()
var request = require('request')

// 获取ip city
router.get('/', function (req, res, next) {
  request('http://ip.chinaz.com/getip.aspx', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json({Data: body})
    }else{
      res.json({error: 'error'})
    }
  })
  
})

module.exports = router
