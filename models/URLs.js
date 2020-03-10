const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const URLSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  visited: {
    type: Boolean
  },
  external: {
    type: Boolean
  }
});

module.exports = URL = mongoose.model("url", URLSchema);
