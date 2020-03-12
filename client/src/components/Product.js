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
          <Row className="justify-content-between mb-2">
            <Col className="ml-4 mt-2">
              {this.props.availableOnline ? (
                <Row>
                  <Image src="/icons/truck.png" />
                  <span className="availability-text ml-1">Bestellbar</span>
                </Row>
              ) : (
                ""
              )}
            </Col>
            {this.props.availableStore ? (
              <Col className="mr-3 mt-2">
                <Row>
                  <Image src="/icons/pin.png" />
                  <span className="availability-text">Im Markt verfügbar</span>
                </Row>
              </Col>
            ) : (
              ""
            )}
          </Row>
          <CardImg
            top
            width="100%"
            src={this.props.image}
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
            <CardTitle className="title-product">{this.props.name}</CardTitle>
            <Container className="mt-3">
              <Row className="star-rating">
                <Image className="star" src="/icons/star.png" />
                <Image className="star" src="/icons/star.png" />
                <Image className="star" src="/icons/star.png" />
                <Image className="star" src="/icons/star.png" />
                <Image className="star" src="/icons/star.png" />

                <span className="star-number">{this.props.rating}</span>
              </Row>
            </Container>
            <CardText className="price mt-3">{this.props.price}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Product;
