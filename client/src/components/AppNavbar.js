import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

class AppNavbar extends Component {
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
      <div className="navbar-categories">
        <Navbar color="light" light expand="md">
          <Container>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto nav-fill w-100" navbar>
                <NavItem>
                  <NavLink href="/">Bauen</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Garten und Freizeit</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Technik</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Wohnen</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Küche</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Bad</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Gartenplaner</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Badplaner</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Magazin</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Angebote</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
