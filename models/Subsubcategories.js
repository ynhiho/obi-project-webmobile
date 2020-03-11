const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const SubsubcategoriesSchema = new Schema({
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

module.exports = Subsubcategories = mongoose.model(
  "subsubcategories",
  SubsubcategoriesSchema
);
