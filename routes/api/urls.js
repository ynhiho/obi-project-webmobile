const express = require("express");
const router = express.Router();

// URL Model
const Category = require("../../models/Category");
const Subcategories = require("../../models/Subcategories");
const Subsubcategories = require("../../models/Subsubcategories");

// @route GET api/urls
// @desc Get All Urls
// @access Public
router.get("/", (req, res) => {
  Category.find().then(category => res.json(category));
});

// @route POST api/urls
// @desc Create a Post
// @access Public
router.post("/", (req, res) => {
  // c.queue(["https://www.obi.de/"]);
  /* const newCategory = new Category({
    name: req.body.url,
    url: false
  });

  newCategory.save().then(url => res.json(url)); */
});

module.exports = router;
