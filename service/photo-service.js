var mongoose = require('mongoose')

var PhotoSchema = new mongoose.Schema({
  url: String,
  name: String,
  date: String,
  describe: String,
  fileName: String,
  fileSize: String,
  fileType: String
})

PhotoSchema.statics = {
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

var PhotoModel = mongoose.model('photo', PhotoSchema)

module.exports = PhotoModel
