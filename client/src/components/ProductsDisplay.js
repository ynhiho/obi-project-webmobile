import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Product from "./Product";

class ProductDisplay extends Component {
  render() {
    return (
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
    );
  }
}

export default ProductDisplay;
