var mongoose = require('mongoose')
var UsersSchema = require('../schemas/usersSchema')
var Users = mongoose.model('user', UsersSchema)

module.exports = Users