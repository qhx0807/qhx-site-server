var mongoose = require('mongoose')

var ArchiveSchema = new mongoose.Schema({
  title: String
})

ArchiveSchema.statics = {
  query: function(cb) {
    return this.find().exec(cb)
  },
  insert: function(doc, cb) {
    return this.create(doc).exec(cb)
  },
  update: function(id, doc, cb){
    return this.update({_id: id}, doc).exec(cb)
  },
}
module.exports = ArchiveSchema