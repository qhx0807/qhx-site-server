var mongoose = require('mongoose')

var NotesSchema = new mongoose.Schema({
  title: String
})

NotesSchema.statics = {
  query: function(cb) {
    return this.find().exec(cb)
  },
  edit: function(id, doc, cb){
    return this.update({_id: id}, doc).exec(cb)
  },
  delete: function(id, cb){
    return this.remove({_id: id}).exec(cb)
  },
}

var NoteModel = mongoose.model('note', NotesSchema)

module.exports = NoteModel