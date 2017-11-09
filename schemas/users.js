var mongoose = require('mongoose')

var UsersSchema = new mongoose.Schema({
  name: String,
  pwd: String
})

// UsersSchema.pre('save', function(next) {
//   if (this.isNew) {
//     this.meta.createAt = this.meta.updateAt = Date.now()
//   } else {
//     this.meta.updateAt = Date.now()
//   }

//   next()
// })

//查询的静态方法
UsersSchema.statics = {
  fetch: function(cb) {
    //查询所有数据
    return this.find().exec(cb)
  },
  findById: function(id, cb) {
    //根据id查询单条数据
    return this.findOne({ _id: id }).exec(cb)
  }
}

//暴露出去的方法
module.exports = UsersSchema
