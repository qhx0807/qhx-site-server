var mongoose = require('mongoose')

var LogSchema = new mongoose.Schema({
  time: String,
  api: String
})


LogSchema.statics = {
  add: function(doc, cb) {
    return this.create(doc).exec(cb)
  },
  query: function(cb){
    return this.find().exec(cb)
  }
}

module.exports = LogSchema