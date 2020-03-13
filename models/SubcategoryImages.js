const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const SubcategoryImagesSchema = new Schema({
  subcategory: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

module.exports = SubcategoryImages = mongoose.model(
  "subcategoryimages",
  SubcategoryImagesSchema
);
