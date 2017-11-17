var mongoose = require('mongoose')

var NotesSchema = new mongoose.Schema({
  title: String
})

NotesSchema.statics = {
  fetch: function(cb) {
    return this.find().exec(cb)
  }
}
module.exports = NotesSchema