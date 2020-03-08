import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./SubCatGroup.css";
import SubCatDetails from "./components/SubCatDetails";

class SubCatGroup extends Component {
  render() {
    return (
      <Container>
        <h3>Category</h3>
        <SubCatDetails />
      </Container>
    );
  }
}

export default SubCatGroup;
