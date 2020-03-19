
const Product = require('../models/products')

function create({
  barCode,
  description,
  pricePublic,
  priceStore,
  departmen,
  
}) {
  const newProduct = new Product({
    
    barCode,
    description,
    pricePublic,
    priceStore,
    departmen,
    
  })
  return newProduct.save()
}

function getAll() {
  return Product.find()
}

function getById(id) {
  return Product.findById(id)

}

function deletebyId(id) {
  return Product.findByIdAndDelete(id)
}

function updateById(id, postInfoToUpdate) {
  return Product.findByIdAndUpdate(id, postInfoToUpdate)
}

module.exports = {
  create,
  deletebyId,
  getAll,
  getById,
  updateById
}