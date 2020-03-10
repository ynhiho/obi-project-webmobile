var Crawler = require("crawler");
let categories = [];

var c = new Crawler({
  maxConnections: 10,
  // This will be called for each crawled page
  callback: function(error, res, done) {
    if (error) {
      console.log(error);
    } else {
      var $ = res.$;

      categories = setCategories($, categories);

      // console.log(categories);
      // console.log(categories.length);
      categories.map(category => {
        c2.queue(category.url);
      });
    }
    done();
  }
});

function setCategories($, categories) {
  $(".nav-first .content-wrapper .first-level li a .text").each(function(
    i,
    element
  ) {
    const $element = $(element);
    if (i <= 5) {
      let categoryName = $element.text();
      const category = {
        name: categoryName,
        url: ""
      };
      categories.push(category);
    }
  });

  const allCategories = [];
  $(".nav-first .content-wrapper .first-level li a").each(function(i, element) {
    const $element = $(element);
    if ($element.attr("wt_name") === "flyoutmenu.level1") {
      allCategories.push($element.attr("href"));
    }
  });

  allCategories.pop();
  allCategories.pop();
  allCategories.pop();

  for (let i = 0; i < categories.length; i++) {
    categories[i].url = allCategories[i];
  }

  return categories;
}

// Queue a list of URLs
c.queue(["https://www.obi.de/"]);

var c2 = new Crawler({
  maxConnections: 10,
  // This will be called for each crawled page
  callback: function(error, res, done) {
    if (error) {
      console.log(error);
    } else {
      var $ = res.$;
      let subcategories = { parentCategory: "", subcats: [] };

      subcategories.subcats = setSubCategories($);
      subcategories.parentCategory = getParentCategory($);

      console.log(subcategories);
    }
    done();
  }
});

function setSubCategories($) {
  let helper = [];
  $(".first-level li a").each(function(i, element) {
    const $element = $(element);
    if ($element.attr("wt_name") === "assortment_menu.level2") {
      let subCategoryName = $element.text();
      helper.push(subCategoryName);
    }
  });
  return helper;
}

function getParentCategory($) {
  return $("h1").text();
}
