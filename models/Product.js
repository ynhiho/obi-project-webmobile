const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const ProductSchema = new Schema({
  parentCategory: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  },
  availableOnline: {
    type: Boolean,
    required: true
  },
  availableStore: {
    type: Boolean,
    required: true
  }
});

module.exports = Product = mongoose.model("product", ProductSchema);
