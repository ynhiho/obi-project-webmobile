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
    let sortedNames = [];
    this.state.subcategories.map(subcategory => {
      sortedNames.push(subcategory.subsubcat.name);
    });
    sortedNames = [...new Set(sortedNames)];
    sortedNames.sort();

    return (
      <ul className="subsubcategory-list">
        <li>{this.props.subsubcategory}</li>
        {sortedNames.map(name =>
          name.localeCompare(this.props.subsubcategory) !== 0 ? (
            <li> {name} </li>
          ) : (
            ""
          )
        )}
      </ul>
    );
  }
}

export default SubcategoryList;
