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

      subcategories.map(subcategory => {
        c3.queue(subcategory.subcats.url);
      });

      // console.log(subcategories);
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
      let subsubcategories = [];

      subsubcategories = setSubSubCategories($);

      subsubcategories.map(subsubcategory => {
        c4.queue(subsubcategory.url);
      });
    }
    done();
  }
});

function setSubSubCategories($) {
  let helper = [];
  $(".first-level li a").each(function(i, element) {
    const $element = $(element);
    if (
      $element.attr("wt_name") === "assortment_menu.level2" ||
      $element.attr("wt_name") === "assortment_menu.level3"
    ) {
      const subsubCategoryName = $element.text();
      const subsubCategoryUrl = $element.attr("href");
      const subsubCategory = {
        parentCategory: getParentCategory($),
        name: subsubCategoryName,
        url: subsubCategoryUrl
      };
      helper.push(subsubCategory);
    }
  });
  return helper;
}

/*************************** SubSubCategories ***************************/

var c4 = new Crawler({
  maxConnections: 10,
  // This will be called for each crawled page
  callback: function(error, res, done) {
    if (error) {
      console.log(error);
    } else {
      var $ = res.$;
      let products = [];

      products = setProducts($);

      console.log(products);
    }
    done();
  }
});

function setProducts($) {
  let helper = [];
  $(".product a .info-container .description p").each(function(i, element) {
    const $element = $(element);

    const productName = $element.text();
    const product = {
      parentCategory: getProductParentCategory($),
      name: productName,
      image: "",
      price: "",
      rating: "",
      availableOnline: Math.round(Math.random()),
      availableStore: Math.round(Math.random())
    };
    if (helper.length < 60) {
      helper.push(product);
    }
  });

  let images = [];
  $(
    "div.block-context div#ShopContent div.shop-content div.product-container ul.products-wp li.product a.product-wrapper span.image-container img.image"
  ).each(function(i, element) {
    const $element = $(element);

    let imageUrl = $element.attr("src");
    if (imageUrl.localeCompare("/skin/e9ad52c/images/43t.gif") === 0) {
      imageUrl = $element.attr("data-src");
    }

    if (images.length < 60) {
      images.push(imageUrl);
    }

    for (let i = 0; i < helper.length; i++) {
      helper[i].image = images[i];
    }
  });

  let prices = [];
  $(".product a .info-container .price .price-new").each(function(i, element) {
    const $element = $(element);

    const price = $element.attr("data-csscontent");

    if (prices.length < 60) {
      prices.push(price);
    }

    for (let i = 0; i < helper.length; i++) {
      helper[i].price = prices[i];
    }
  });

  let ratings = [];
  $(
    ".product a .info-container .rating .rating__star-wrap .rating__count-after"
  ).each(function(i, element) {
    const $element = $(element);

    const rating = $element.text();

    if (ratings.length < 60) {
      ratings.push(rating);
    }

    for (let i = 0; i < helper.length; i++) {
      helper[i].rating = ratings[i];
    }
  });

  return helper;
}

function getProductParentCategory($) {
  return $(".block-context h1").text();
}

module.exports = {
  c,
  c2,
  c3
};
