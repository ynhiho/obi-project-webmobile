import React, { Component } from "react";
import "./TopBar.css";
import { Row, Col, Image } from "react-bootstrap";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Form,
  Input
} from "reactstrap";

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar className="topbar" expand="md">
          <Container className="justify-content-between p-0">
            <Col className="col-md-2">
              <NavbarBrand className="logo text-center" href="/">
                OBI
              </NavbarBrand>
            </Col>
            <Col className="col-md-6">
              <Form>
                <Input
                  className="input-field"
                  placeholder="Suchbegriff eingeben"
                />
              </Form>
            </Col>
            <Col className="col-md-4">
              <Nav className="mr-auto nav-fill w-100" navbar>
                <NavItem>
                  <Row>
                    <Col className="icon-topbar col-md-2">
                      <Image src="/icons/location.png" />
                    </Col>
                    <Col className="icon-topbar col-md-10 pl-0">
                      <NavLink href="/" className="pl-0 pt-0">
                        <p className="paragraph text-title-topbar">
                          Marktfiner
                        </p>
                        <p className="paragraph">OBI in Ihrer Nähe</p>
                      </NavLink>
                    </Col>
                  </Row>
                </NavItem>
                <NavItem>
                  <Row>
                    <Col className="col-md-2 pl-0 icon-topbar">
                      <Image src="/icons/shopping_car.png" />
                    </Col>
                    <Col className=" col-md-10 pl-0">
                      <NavLink href="/" className="pl-0 pt-0">
                        <p className="paragraph text-title-topbar">Warenkorb</p>
                        <p className="paragraph">0 Artikel, 0,00 €</p>
                      </NavLink>
                    </Col>
                  </Row>
                </NavItem>
              </Nav>
            </Col>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default TopBar;
