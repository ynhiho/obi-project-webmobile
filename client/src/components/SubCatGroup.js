import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./SubCatGroup.css";
import SubCatDetails from "./SubCatDetails";

class SubCatGroup extends Component {
  render() {
    return (
      <Container className="pl-0 mt-5">
        <h3 className="title-category">Category</h3>
        <Row>
          <Col className="col-md-4">
            <SubCatDetails />
            <SubCatDetails />
            <SubCatDetails />
          </Col>
          <Col className="col-md-4">
            <SubCatDetails />
            <SubCatDetails />
            <SubCatDetails />
          </Col>
          <Col className="col-md-4">
            <SubCatDetails />
            <SubCatDetails />
            <SubCatDetails />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SubCatGroup;
