
const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
  barCode:{
    type: Number,
    minlength: 1,
    maxlength: 100,
    required: true,
    trim: true
  },
  description: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true,
    trim: true
  },
  pricePublic: {
    type: Number,
    required:true
  },
  priceStore: {
    type: Number,
    required: false,
    
  },
  department: {
    type: String,
    required: false,
    minlength:2,
    maxlength:30

  }
 
})

module.exports = mongoose.model('Products', productsSchema)