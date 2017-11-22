var mongoose = require('mongoose')

var TagSchema = new mongoose.Schema({
  name: String,
  url: String,
  memo: String
})

TagSchema.statics = {
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

var TagModel = mongoose.model('tag', TagSchema)

module.exports = TagModel
