var mongoose = require('mongoose')

var PvSchema = new mongoose.Schema({
  time: String,
  ip: String,
  location: String
})

PvSchema.statics = {
  query: function (date, cb) {
    if(!date){
      return this.find().sort({_id: -1}).exec(cb)
    }else{
      return this.find({'time': new RegExp(date, 'i')}).sort({_id: -1}).exec(cb)
    }
    
  },
  fetch: function (cb) {
    return this.find().exec(cb)
  },
  delete: function (id, cb) {
    return this.remove({_id: id}).exec(cb)
  }
}

var PvModel = mongoose.model('pv', PvSchema)

module.exports = PvModel
