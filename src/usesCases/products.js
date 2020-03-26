const Product = require("../models/products");

function create(postData) {
    return Product.create(postData)
}

function getAll() {
  return Product.find();
}

function getById(id) {
  return Product.findById(id);
}

function deletebyId(id) {
  return Product.findByIdAndDelete(id);
}

function getByCode(code) {
  return Product.find({ barCode: code});
}

function updateById(id, postInfoToUpdate) {
  return Product.findByIdAndUpdate(id, postInfoToUpdate);
}

module.exports = {
  create,
  deletebyId,
  getAll,
  getById,
  updateById,
  getByCode
};
