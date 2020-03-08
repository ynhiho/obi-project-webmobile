import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductList from "./ProductList";
import ProductsDisplay from "./ProductsDisplay";

class ProductDisplayPage extends Component {
  render() {
    return (
      <Row>
        <Col className="col-md-3">
          <ProductList />
        </Col>
        <Col className="col-md-9 mt-5 pr-5">
          <ProductsDisplay />
        </Col>
      </Row>
    );
  }
}

export default ProductDisplayPage;
