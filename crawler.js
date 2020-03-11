var Crawler = require("crawler");

/*************************** SubCategories ***************************/

var c = new Crawler({
  maxConnections: 10,
  // This will be called for each crawled page
  callback: function(error, res, done) {
    if (error) {
      console.log(error);
    } else {
      var $ = res.$;

      let categories = [];
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

/*************************** SubCategories ***************************/

var c2 = new Crawler({
  maxConnections: 10,
  // This will be called for each crawled page
  callback: function(error, res, done) {
    if (error) {
      console.log(error);
    } else {
      var $ = res.$;
      let subcategories = {};

      subcategories = setSubCategories($);

      /* subcategories.subcats.map(subcategory => {
        c3.queue(subcategory.url);
      }); */

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
      const subCategoryName = $element.text();
      const subCategoryUrl = $element.attr("href");
      const subCategory = {
        parentCategory: getParentCategory($),
        subcats: {
          name: subCategoryName,
          url: subCategoryUrl
        }
      };
      helper.push(subCategory);
    }
  });
  return helper;
}

function getParentCategory($) {
  return $("h1").text();
}

/*************************** SubSubCategories ***************************/

var c3 = new Crawler({
  maxConnections: 10,
  // This will be called for each crawled page
  callback: function(error, res, done) {
    if (error) {
      console.log(error);
    } else {
      var $ = res.$;
      let subsubcategories = {
        parentCategory: "",
        subsubcats: []
      };

      subsubcategories.subsubcats = setSubCategories($);
      subsubcategories.parentCategory = getParentCategory($);

      /* console.log(subsubcategories); */
    }
    done();
  }
});

/* 
function setSubSubCategories($) {
  let helper = [];
  $(".first-level li a").each(function(i, element) {
    const $element = $(element);
    if ($element.attr("wt_name") === "assortment_menu.level2") {
      const subCategoryName = $element.text();
      const subCategoryUrl = $element.attr("href");
      const subCategory = {
        name: subCategoryName,
        url: subCategoryUrl
      };
      helper.push(subCategory);
    }
  });
  return helper;
}

function getSubParentCategory($) {
  return $("h1").text();
}
 */

module.exports = {
  c,
  c2,
  c3
};
