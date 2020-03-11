import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./SubCatDetails.css";

class SubCatDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subsubcategories: [],
      clickedCategory: "Bauen"
    };
  }

  componentDidUpdate(prevProps) {
    // need to wrap it in a condition to check for state or prop changes from previous state. Incorrect usage of setState() can lead to an infinite loop.
    if (this.props.subcategoryName !== prevProps.subcategoryName) {
      fetch("/api/urls/subsubcategories/" + this.props.subcategoryName)
        .then(res => res.json())
        .then(subsubcategoriesFromDB => {
          this.setState({ subsubcategories: subsubcategoriesFromDB });
        });
    }
  }

  render() {
    const subcats = this.state.subsubcategories;
    if (subcats[0] !== undefined) {
      console.log(subcats[0].subsubcat.name);
    }

    return (
      <Container className="container-details">
        <h5 className="title-subcat">{this.props.subcategoryName}</h5>
        <hr className="horizontal-line" />
        <Row>
          <Col>
            <ul className="list-subcat">
              <li>
                <a href="/products">
                  {subcats[0] !== undefined ? subcats[0].subsubcat.name : ""}
                </a>
              </li>
              <li>
                <a href="/products">
                  {subcats[0] !== undefined ? subcats[1].subsubcat.name : ""}
                </a>
              </li>
              <li>
                <a href="/products">
                  {subcats[0] !== undefined ? subcats[2].subsubcat.name : ""}
                </a>
              </li>
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
