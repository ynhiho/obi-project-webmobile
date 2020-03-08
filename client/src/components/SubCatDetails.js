import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./SubCatDetails.css";

class SubCatDetails extends Component {
  render() {
    return (
      <Container className="container-details">
        <h5 className="title-subcat">SubCat1</h5>
        <hr className="horizontal-line" />
        <Row>
          <Col>
            <ul className="list-subcat">
              <li>SubSubCat1</li>
              <li>SubSubCat2</li>
              <li>SubSubCat3</li>
              <li>Mehr anzeigen ></li>
            </ul>
          </Col>
          <Col>
            <Image src="/pics/placeholder-furniture.jpg" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SubCatDetails;
