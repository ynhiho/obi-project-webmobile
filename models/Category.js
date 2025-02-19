const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

module.exports = Category = mongoose.model("category", CategorySchema);
