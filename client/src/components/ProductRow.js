import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import "./ProductsDisplay.css";
import Product from "./Product";

class ProductRow extends Component {
  render() {
    return (
      <Row className="mt-2">
        <Col className="col-md-3 p-0">
          <Product
            image={this.props.image}
            price={this.props.price}
            rating={this.props.rating}
            name={this.props.name}
            availableOnline={this.props.availableOnline}
            availableStore={this.props.availableStore}
          />
        </Col>
        <Col className="col-md-3 p-0">
          <Product
            image={this.props.image}
            price={this.props.price}
            rating={this.props.rating}
            name={this.props.name}
            availableOnline={this.props.availableOnline}
            availableStore={this.props.availableStore}
          />
        </Col>
        <Col className="col-md-3 p-0">
          <Product
            image={this.props.image}
            price={this.props.price}
            rating={this.props.rating}
            name={this.props.name}
            availableOnline={this.props.availableOnline}
            availableStore={this.props.availableStore}
          />
        </Col>
        <Col className="col-md-3 p-0">
          <Product
            image={this.props.image}
            price={this.props.price}
            rating={this.props.rating}
            name={this.props.name}
            availableOnline={this.props.availableOnline}
            availableStore={this.props.availableStore}
          />
        </Col>
      </Row>
    );
  }
}

export default ProductRow;
