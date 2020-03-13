import React, { Component } from "react";
import "./SubcategoryList.css";

class SubcategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subcategories: [],
      category: this.props.category
    };
  }

  componentDidMount() {
    fetch("/api/urls/subsubcategories/" + this.props.subcategory)
      .then(res => res.json())
      .then(subcategoriesFromDB => {
        this.setState({ subcategories: subcategoriesFromDB });
      });
  }

  render() {
    return (
      <ul className="subsubcategory-list">
        <li>{this.props.subsubcategory}</li>
        {this.state.subcategories.map(subcategory =>
          subcategory.subsubcat.name.localeCompare(
            this.props.subsubcategory
          ) !== 0 ? (
            <li> {subcategory.subsubcat.name} </li>
          ) : (
            ""
          )
        )}
      </ul>
    );
  }
}

export default SubcategoryList;
