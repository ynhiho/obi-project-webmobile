import React, { Component } from "react";
import "./Product.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

class Product extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardImg
            top
            width="100%"
            src="/pics/shelf.jpg"
            alt="Card image cap"
          />
          <CardBody className="pt-2">
            <Row className="justify-content-between mb-2">
              <Col>
                <span className="small-text">Vergleichen</span>
              </Col>
              <Col>
                <span className="small-text text-merken">Merken</span>
              </Col>
            </Row>
            <CardTitle className="title-product">
              Wandregal Kiefer massiv Weiß 90 cm
            </CardTitle>
            <Container className="mt-3">
              <Row className="star-rating">
                <Image className="star" src="/icons/star.png" />
                <Image className="star" src="/icons/star.png" />
                <Image className="star" src="/icons/star.png" />
                <Image className="star" src="/icons/star.png" />
                <Image className="star" src="/icons/star.png" />

                <span className="star-number">5.0</span>
              </Row>
            </Container>
            <CardText className="price mt-3">29,90 €</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Product;
