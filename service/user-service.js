var mongoose = require('mongoose')

var UsersSchema = new mongoose.Schema({
  name: String,
  pwd: String,
  role: String,
  lastLoginTime: String,
  ip: String,
  location: String,
  headImg: String,
})


UsersSchema.statics = {
  query: function(cb) {
    return this.find().exec(cb)
  },
  login: function(name, pwd, cb) {
    return this.findOne({ name: name, pwd: pwd }).exec(cb)
  },
  update: function(id, doc, cb){
    return this.update({_id: id}, doc).exec(cb)
  },
  delete: function(id, cb){
    return this.remove({_id: id}).exec(cb)
  },
}

var UsersModel = mongoose.model('user', UsersSchema)


module.exports = UsersModel