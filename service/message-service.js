var mongoose = require('mongoose')

var MessageSchema = new mongoose.Schema({
  date: String,
  message: String,
  email: String,
  use: String,
  ip: String,
  location: String,
  like: String,
  unlike: String,
  reply: Array
})

MessageSchema.statics = {
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

var MessageModel = mongoose.model('message', MessageSchema)

module.exports = MessageModel
