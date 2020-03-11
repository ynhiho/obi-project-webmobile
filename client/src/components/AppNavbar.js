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
      isOpen: false,
      categories: []
    };
  }

  UNSAFE_componentWillMount() {
    fetch("/api/urls")
      .then(res => res.json())
      .then(categoriesFromDB => {
        this.setState({ categories: categoriesFromDB });
      });
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    console.log(this.state.categories);
    return (
      <div className="navbar-categories">
        <Navbar color="light" light expand="md">
          <Container>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto nav-fill w-100" navbar>
                {this.state.categories.map(category => (
                  <NavItem>
                    <NavLink href="/products">{category.name}</NavLink>
                  </NavItem>
                ))}
                <NavItem>
                  <NavLink href="/products">Gartenplaner</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/products">Badplaner</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/products">Magazin</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/products">Angebote</NavLink>
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
