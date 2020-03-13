const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// URL Model
const Category = require("../../models/Category");
const Subcategories = require("../../models/Subcategories");
const Subsubcategories = require("../../models/Subsubcategories");
const Product = require("../../models/Product");
const SubcategoryImages = require("../../models/SubcategoryImages");

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

// @route GET api/urls
router.get("/allproducts/:subsubcategory", (req, res) => {
  Product.find({
    parentCategory: req.params.subsubcategory
  }).then(productsFromDB => res.json(productsFromDB));
});

// @route GET api/urls
router.get("/subcategoryimage/:subcategory", (req, res) => {
  SubcategoryImages.find({
    subcategory: req.params.subcategory
  }).then(imageFromDB => res.json(imageFromDB));
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
