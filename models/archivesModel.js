var mongoose = require('mongoose')
var ArchivesSchema = require('../schemas/archivesSchema')
var Archives = mongoose.model('archives', ArchivesSchema)

module.exports = Archives