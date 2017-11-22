var mongoose = require('mongoose')

var ArchiveSchema = new mongoose.Schema({
  name: String,
  reamrks: String,
})

ArchiveSchema.statics = {
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

var ArchiveModel = mongoose.model('archives', ArchiveSchema)

module.exports = ArchiveModel