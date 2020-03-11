import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductList from "./ProductList";
import SubCatGroup from "./SubCatGroup";

class CategoryPage extends Component {
  render() {
    return (
      <Row>
        <Col className="col-md-3">
          <ProductList clickedCategory={this.props.category} />
        </Col>
        <Col className="col-md-9 pl-0">
          <SubCatGroup />
        </Col>
      </Row>
    );
  }
}

export default CategoryPage;
