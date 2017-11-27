var express = require('express')
var router = express.Router()
var qiniu = require('qiniu')

var accessKey = '_iCkoUSbXhnN8AF8T8Mi1qBr-6z47dk-0iQs0C_r'
var secretKey = 'c7raaxbjXxadIaSU4PfSuMJMw1ICaoJuEjqXoW4-'
var mac = new qiniu.auth.digest.Mac(accessKey, secretKey)

var options = {
  scope: 'qhx-store-2',
  expires: 7200,
}

var putPolicy = new qiniu.rs.PutPolicy(options)
var uploadToken = putPolicy.uploadToken(mac)

router.get('/qiniuToken', function(req, res, next) {
  res.json({ Data: uploadToken })
})

module.exports = router
