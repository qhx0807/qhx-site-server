var express = require('express')
var router = express.Router()
var qiniu = require('qiniu')

var accessKey = '_iCkoUSbXhnN8AF8T8Mi1qBr-6z47dk-0iQs0C_r'
var secretKey = 'c7raaxbjXxadIaSU4PfSuMJMw1ICaoJuEjqXoW4-'
var mac = new qiniu.auth.digest.Mac(accessKey, secretKey)

var options = {
  scope: 'qhx-store-2',
  expires: 7200
}

var putPolicy = new qiniu.rs.PutPolicy(options)
var uploadToken = putPolicy.uploadToken(mac)

router.get('/qiniuToken', function (req, res, next) {
  res.json({ Data: uploadToken })
})

router.get('/imgInfo', function (req, res, next) {
  var accessKey = req.body.accessKey || ''
  var secretKey = req.body.secretKey || ''
  var bucket = req.body.bucket || ''
  var key = req.body.fileName || ''

  var mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
  var config = new qiniu.conf.Config()
  var bucketManager = new qiniu.rs.BucketManager(mac, config)

  bucketManager.stat(bucket, key, function (err, respBody, respInfo) {
    if (err) {
      console.log(err)
    } else {
      if (respInfo.statusCode == 200) {
        console.log(respBody.hash)
        console.log(respBody.fsize)
        console.log(respBody.mimeType)
        console.log(respBody.putTime)
        console.log(respBody.type)
      } else {
        console.log(respInfo.statusCode)
        console.log(respBody.error)
      }
    }
  })
})

module.exports = router
