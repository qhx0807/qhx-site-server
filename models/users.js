var mongoose = require('mongoose')
var UsersSchema = require('../schemas/users')
var Users = mongoose.model('user', UsersSchema)

module.exports = Users