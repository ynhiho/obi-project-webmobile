import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ProductsDisplay.css";
import Product from "./Product";
import SortingBar from "./SortingBar";

class ProductDisplay extends Component {
  render() {
    return (
      <Container>
        <h3 className="title-category-prdocut-display">Category</h3>
        <hr />
        <SortingBar />
        <Row className="mt-2">
          <Col className="col-md-3 p-0">
            <Product />
          </Col>
          <Col className="col-md-3 p-0">
            <Product />
          </Col>
          <Col className="col-md-3 p-0">
            <Product />
          </Col>
          <Col className="col-md-3 p-0">
            <Product />
          </Col>
        </Row>
        <Row>
          <Col className="col-md-3 p-0">
            <Product />
          </Col>
          <Col className="col-md-3 p-0">
            <Product />
          </Col>
          <Col className="col-md-3 p-0">
            <Product />
          </Col>
          <Col className="col-md-3 p-0">
            <Product />
          </Col>
        </Row>
        <Row>
          <Col className="col-md-3 p-0">
            <Product />
          </Col>
          <Col className="col-md-3 p-0">
            <Product />
          </Col>
          <Col className="col-md-3 p-0">
            <Product />
          </Col>
          <Col className="col-md-3 p-0">
            <Product />
          </Col>
        </Row>
        <Row>
          <Col className="col-md-3 p-0">
            <Product />
          </Col>
          <Col className="col-md-3 p-0">
            <Product />
          </Col>
          <Col className="col-md-3 p-0">
            <Product />
          </Col>
          <Col className="col-md-3 p-0">
            <Product />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProductDisplay;
