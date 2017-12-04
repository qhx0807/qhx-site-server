var mongoose = require('mongoose')

var NotesSchema = new mongoose.Schema({
  title: String,
  titleImg: String,
  archive: String,
  auth: String,
  date: String,
  htmlvalue: String,
  mdValue: String,
  like: { type: Number, defalut: 0 },
  watch: { type: Number, defalut: 0 },
  commits: Array,
  intro: String,
  tags: [String]
})

NotesSchema.statics = {
  query: function(cb) {
    return this.find().exec(cb)
  },
  edit: function(id, doc, cb) {
    return this.update({ _id: id }, doc).exec(cb)
  },
  delete: function(id, cb) {
    return this.remove({ _id: id }).exec(cb)
  }
}

var NoteModel = mongoose.model('note', NotesSchema)

module.exports = NoteModel
