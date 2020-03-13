import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SubcategoryList from "./SubcategoryList";
import ProductsDisplay from "./ProductsDisplay";

class ProductDisplayPage extends Component {
  render() {
    return (
      <Row>
        <Col className="col-md-3">
          <SubcategoryList
            subcategory={this.props.location.subcat}
            subsubcategory={this.props.location.state}
          />
        </Col>
        <Col className="col-md-9 mt-5 pr-5">
          <ProductsDisplay subsubcategory={this.props.location.state} />
        </Col>
      </Row>
    );
  }
}

export default ProductDisplayPage;
