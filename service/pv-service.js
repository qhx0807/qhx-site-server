var mongoose = require('mongoose')

var LogSchema = new mongoose.Schema({
  time: String,
  ip: String,
  location: String
})

LogSchema.statics = {
  query: function (date, cb) {
    if(date){
      return this.find({'time': new RegExp(date, 'i')}).exec(cb)
    }else{
      return this.find().exec(cb)
    }
    
  },
  fetch: function (cb) {
    return this.find().exec(cb)
  },
  delete: function (id, cb) {
    return this.remove({_id: id}).exec(cb)
  }
}

var LogModel = mongoose.model('pv', LogSchema)

module.exports = LogModel
