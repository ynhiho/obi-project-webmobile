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
            image={this.props.image[0]}
            price={this.props.price[0]}
            rating={this.props.rating[0]}
            name={this.props.name[0]}
            availableOnline={this.props.availableOnline[0]}
            availableStore={this.props.availableStore[0]}
          />
        </Col>
        <Col className="col-md-3 p-0">
          <Product
            image={this.props.image[1]}
            price={this.props.price[1]}
            rating={this.props.rating[1]}
            name={this.props.name[1]}
            availableOnline={this.props.availableOnline[1]}
            availableStore={this.props.availableStore[1]}
          />
        </Col>
        <Col className="col-md-3 p-0">
          <Product
            image={this.props.image[2]}
            price={this.props.price[2]}
            rating={this.props.rating[2]}
            name={this.props.name[2]}
            availableOnline={this.props.availableOnline[2]}
            availableStore={this.props.availableStore[2]}
          />
        </Col>
        <Col className="col-md-3 p-0">
          <Product
            image={this.props.image[3]}
            price={this.props.price[3]}
            rating={this.props.rating[3]}
            name={this.props.name[3]}
            availableOnline={this.props.availableOnline[3]}
            availableStore={this.props.availableStore[3]}
          />
        </Col>
      </Row>
    );
  }
}

export default ProductRow;
