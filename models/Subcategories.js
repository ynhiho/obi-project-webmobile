const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const SubcategoriesSchema = new Schema({
  parentCategory: {
    type: String,
    required: true
  },
  subcats: [
    {
      name: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    }
  ]
});

module.exports = Subcategories = mongoose.model(
  "subcategory",
  SubcategoriesSchema
);
