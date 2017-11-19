var mongoose = require('mongoose')
var LogSchema = require('../schemas/logSchema')
var Log = mongoose.model('log', LogSchema)

module.exports = Log