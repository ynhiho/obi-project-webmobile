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
import { Link } from "react-router-dom";
import "./AppNavbar.css";

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

  shareClickedCategory = categoryName => {
    this.props.clickedCategory(categoryName);
  };

  render() {
    return (
      <div className="navbar-categories">
        <Navbar color="light" light expand="md">
          <Container>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto nav-fill w-100" navbar>
                {this.state.categories.map(category => (
                  <NavItem
                    className="main-nav-items"
                    onClick={() => this.shareClickedCategory(category.name)}
                  >
                    <Link
                      to={{
                        pathname: "/"
                      }}
                    >
                      <NavLink>{category.name}</NavLink>
                    </Link>
                  </NavItem>
                ))}
                <NavItem className="main-nav-items">
                  <NavLink>Gartenplaner</NavLink>
                </NavItem>
                <NavItem className="main-nav-items">
                  <NavLink>Badplaner</NavLink>
                </NavItem>
                <NavItem className="main-nav-items">
                  <NavLink>Magazin</NavLink>
                </NavItem>
                <NavItem className="main-nav-items">
                  <NavLink>Angebote</NavLink>
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
