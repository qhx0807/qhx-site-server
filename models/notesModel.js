var mongoose = require('mongoose')
var NotesSchema = require('../schemas/notesSchema')
var Notes = mongoose.model('note', NotesSchema)

module.exports = Notes