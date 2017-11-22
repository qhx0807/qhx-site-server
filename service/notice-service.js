var mongoose = require('mongoose')

var NoticeSchema = new mongoose.Schema({
  content: String,
  date: String,
  user: String
})

NoticeSchema.statics = {
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

var NoticeMOdel = mongoose.model('notice', NoticeSchema)

module.exports = NoticeMOdel
