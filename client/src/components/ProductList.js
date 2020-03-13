import React, { Component } from "react";
import "./ProductList.css";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subcategories: [],
      filteredsubcategories: [],
      clickedCategory: "Bauen"
    };
  }

  UNSAFE_componentWillMount() {
    fetch("/api/urls/subcategories")
      .then(res => res.json())
      .then(subcategoriesFromDB => {
        this.setState({ subcategories: subcategoriesFromDB });
      });
  }

  filterSubcategories = subcategory => {
    if (
      subcategory.parentCategory.localeCompare(this.props.clickedCategory) === 0
    ) {
      return subcategory.subcats[0].name;
    }
  };

  mapSubcategories = () => {
    let filteredSubcategories = [];
    this.state.subcategories.map(subcategory =>
      filteredSubcategories.push(this.filterSubcategories(subcategory))
    );
    filteredSubcategories.sort();
    return filteredSubcategories;
  };

  render() {
    return (
      <ul className="productlist">
        {this.mapSubcategories().map(subcategory => (
          <li>{subcategory}</li>
        ))}
      </ul>
    );
  }
}

export default ProductList;
