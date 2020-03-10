var Crawler = require("crawler");

var c = new Crawler({
  maxConnections: 10,
  // This will be called for each crawled page
  callback: function(error, res, done) {
    if (error) {
      console.log(error);
    } else {
      let categories = [];
      var $ = res.$;

      categories = setCategories($, categories);

      console.log(categories);
      console.log(categories.length);
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
