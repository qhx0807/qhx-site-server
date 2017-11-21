var mongoose = require('mongoose')

var LogSchema = new mongoose.Schema({
  time: String,
  api: String,
  method: String,
  body: Object,
  params: Object,
})


LogSchema.statics = {
  query: function(cb){
    return this.find().exec(cb)
  },
  delete: function(id, cb){
    return this.remove({_id: id}).exec(cb)
  },
}

var LogModel = mongoose.model('log', LogSchema)

module.exports = LogModel