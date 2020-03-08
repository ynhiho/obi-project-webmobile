import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "./SortingBar.css";

class SortingBar extends Component {
  render() {
    return (
      <Row className="justify-content-between">
        <Col>
          <Row>
            <span className="text-sortierung"> Sortierung:</span>
            <ButtonDropdown>
              <DropdownToggle caret size="sm" className="dropdown-sorting ml-2">
                Beliebteste
              </DropdownToggle>
            </ButtonDropdown>
          </Row>
        </Col>
        <Col className="total-products text-sortierung">885 Artikel</Col>
        <Col className="text-sortierung text-page-number">Seite 1 von 13</Col>
      </Row>
    );
  }
}

export default SortingBar;
