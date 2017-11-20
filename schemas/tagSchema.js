var mongoose = require('mongoose')

var TagSchema = new mongoose.Schema({
  title: String
})

TagSchema.statics = {
  query: function(cb) {
    return this.find().exec(cb)
  }
}
module.exports = TagSchema