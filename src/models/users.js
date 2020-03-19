const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
  
  email:{
    type:String,
    minlength:5,
    maxlength:500,
    required:true,
    match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/

  },
  password:{
    type:String,
    minlength:5,
    required:true
  },
  name:{
    type: String,
    minlength:3,
    maxlength:100
  }
})

module.exports = mongoose.model('Users', usersSchema)