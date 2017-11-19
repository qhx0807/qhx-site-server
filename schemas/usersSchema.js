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

UsersSchema.pre('login', function(next) {
  console.log('login pre')

  next()
})

UsersSchema.statics = {
  fetch: function(cb) {
    return this.find().exec(cb)
  },
  login: function(name, pwd, cb) {
    return this.findOne({ name: name, pwd: pwd }).exec(cb)
  },
  updateUser: function(id, doc, cb){
    return this.update({_id: id}, doc).exec(cb)
  },
}

module.exports = UsersSchema
