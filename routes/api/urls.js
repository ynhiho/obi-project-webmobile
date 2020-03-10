const express = require("express");
const router = express.Router();

// URL Model
const URL = require("../../models/URLs");

// @route GET api/urls
// @desc Get All Urls
// @access Public
router.get("/", (req, res) => {
  URL.find().then(urls => res.json(urls));
});

// @route POST api/urls
// @desc Create a Post
// @access Public
router.post("/", (req, res) => {
  const newURL = new URL({
    url: req.body.url,
    visited: false,
    external: req.body.external
  });

  newURL.save().then(url => res.json(url));
});

module.exports = router;
