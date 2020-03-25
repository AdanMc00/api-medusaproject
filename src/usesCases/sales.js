
const Product = require("../models/sales");

function create(postData) {
  return Product.create(postData);
}
function getAll() {
  return Product.find();
}
function deletebyId(id) {
  return Product.findByIdAndDelete(id);
}

module.exports = {
  create,
  deletebyId,
  getAll
};
