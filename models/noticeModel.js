var mongoose = require('mongoose')
var NoticeSchema = require('../schemas/noticeSchema')
var Notice = mongoose.model('notice', NoticeSchema)

module.exports = Notice