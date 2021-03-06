var mongoose = require('mongoose')

var LogSchema = new mongoose.Schema({
  time: String,
  api: String,
  method: String,
  body: Object,
  params: Object,
})


LogSchema.statics = {
  add: function(doc, cb) {
    return this.create(doc).exec(cb)
  },
  query: function(cb){
    return this.find().exec(cb)
  },
  delete: function(id, cb){
    return this.remove({_id: id}).exec(cb)
  },
}

module.exports = LogSchema