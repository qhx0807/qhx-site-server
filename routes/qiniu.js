var express = require('express')
var router = express.Router()
var qiniu = require('qiniu')
var request = require('request')

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

router.post('/imageInfo', function (req, res, next) {
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
        res.json(respBody)
        console.log(respBody.hash)
        console.log(respBody.fsize)
        console.log(respBody.mimeType)
        console.log(respBody.putTime)
        console.log(respBody.type)
      } else {
        console.log(respInfo.statusCode)
        console.log(respBody.error)
        res.json({
          code: respInfo.statusCode,
          error: respBody.error
        })
      }
    }
  })
})

router.post('/imageList', function (req, res, next) {
  var accessKey = req.body.accessKey || ''
  var secretKey = req.body.secretKey || ''
  var bucket = req.body.bucket || ''
  var mac = new qiniu.auth.digest.Mac(accessKey, secretKey)

  const accessToken = qiniuUtil.generateAccessToken(mac, 'http://rsf.qbox.me/list?bucket=' + bucket)
  request
    .post('http://rsf.qbox.me/list?bucket=' + bucket)
    .timeout(10000)
    .set('Host', 'rsf.qbox.me')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Authorization', accessToken)
    .end((err, resp) => {
      if (err) {
        console.log(err)
        res.json({
          code: 204,
          msg: '请求七牛资源失败，请重试'
        })
        return
      }
      if (resp.status == 200) {
        let data = resp.text.replace(/\\/, '')
        data = JSON.parse(data)
        res.json({
          code: 200,
          data: data.items
        })
      } else {
        res.json({
          code: resp.status,
          msg: JSON.parse(resp.text).error
        })
      }
    })
})

router.delete('/deleteImage', function (req, res, next) {
  var accessKey = req.body.accessKey || ''
  var secretKey = req.body.secretKey || ''
  var bucket = req.body.bucket || ''
  var key = req.body.fileName || ''
  var mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
  var config = new qiniu.conf.Config()
  var bucketManager = new qiniu.rs.BucketManager(mac, config)
  // var encodeEntry = qiniuUtil.encodedEntry(bucket, fileName)
  // var accessToken = qiniuUtil.generateAccessToken(mac, 'http://rs.qiniu.com/delete/' + encodeEntry)
  // request
  //   .post('http://rs.qiniu.com/delete/' + encodeEntry)
  //   .set('Host', 'rs.qiniu.com')
  //   .set('Content-Type', 'application/x-www-form-urlencoded')
  //   .set('Authorization', accessToken)
  //   .end((err, resp) => {
  //     if (resp.status == 200) {
  //       res.json({
  //         code: 200,
  //         msg: '删除成功'
  //       })
  //     } else {
  //       res.json({
  //         code: resp.status,
  //         msg: JSON.parse(resp.text).error 
  //       })
  //     }
  //   })
  bucketManager.delete(bucket, key, function (err, respBody, respInfo) {
    if (err) {
      console.log(err)
      res.json({Data: err})
    } else {
      console.log(respInfo.statusCode)
      console.log(respBody)
      res.json({
        code: 200,
        msg: '删除成功'
      })
    }
  })
})

module.exports = router
