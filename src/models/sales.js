const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema({
  barCode: {
    type: Number,
    minlength: 1,
    maxlength: 100,
    required: true,
    trim: true
  },
  cantidad: {
    type: Number,
    required: true
  },
  fechaVenta: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model("Sales", salesSchema);
