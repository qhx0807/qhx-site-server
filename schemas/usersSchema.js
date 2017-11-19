var mongoose = require('mongoose')

var UsersSchema = new mongoose.Schema({
  name: String,
  pwd: String
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
}

module.exports = UsersSchema
