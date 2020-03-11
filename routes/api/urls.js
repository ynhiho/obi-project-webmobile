const express = require("express");
const router = express.Router();
var Crawler = require("crawler");

// URL Model
const Category = require("../../models/Category");
const Subcategories = require("../../models/Subcategories");
const Subsubcategories = require("../../models/Subsubcategories");

// @route GET api/urls
router.get("/", (req, res) => {
  Category.find().then(category => res.json(category));
});

// @route GET api/urls
router.get("/subcategories", (req, res) => {
  Subcategories.find().then(subcategory => res.json(subcategory));
});

// @route GET api/urls
router.get("/subsubcategories/:subcategory", (req, res) => {
  Subsubcategories.find({
    parentCategory: req.params.subcategory
  }).then(subsubcategoriesFromDB => res.json(subsubcategoriesFromDB));
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
