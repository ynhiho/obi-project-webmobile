import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./SubCatGroup.css";
import SubCatDetails from "./SubCatDetails";

class SubCatGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subcategories: [],
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

  filterSubcategories = () => {
    let filteredSubcategories = [];
    let firstNineSubcategories = [];
    this.state.subcategories.map(subcategory =>
      subcategory.parentCategory.localeCompare(this.props.clickedCategory) === 0
        ? filteredSubcategories.push(subcategory.subcats[0].name)
        : ""
    );

    for (let i = 0; i <= 8; i++) {
      firstNineSubcategories.push(filteredSubcategories[i]);
    }
    firstNineSubcategories.sort();
    return firstNineSubcategories;
  };

  render() {
    const subcategories = this.filterSubcategories();
    return (
      <Container className="pl-0 mt-5">
        <h3 className="title-category">{this.props.clickedCategory}</h3>
        <Row>
          <Col className="col-md-4">
            <SubCatDetails subcategoryName={subcategories[0]} />
            <SubCatDetails subcategoryName={subcategories[1]} />
            <SubCatDetails subcategoryName={subcategories[2]} />
          </Col>
          <Col className="col-md-4">
            <SubCatDetails subcategoryName={subcategories[3]} />
            <SubCatDetails subcategoryName={subcategories[4]} />
            <SubCatDetails subcategoryName={subcategories[5]} />
          </Col>
          <Col className="col-md-4">
            <SubCatDetails subcategoryName={subcategories[6]} />
            <SubCatDetails subcategoryName={subcategories[7]} />
            <SubCatDetails subcategoryName={subcategories[8]} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SubCatGroup;
