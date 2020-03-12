import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ProductsDisplay.css";
import ProductRow from "./ProductRow";
import SortingBar from "./SortingBar";

class ProductDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productsPack: []
    };
  }

  componentDidMount() {
    fetch("/api/urls/allproducts/" + this.props.category)
      .then(res => res.json())
      .then(productsFromDB => {
        this.setState({ products: productsFromDB });
      });
  }

  /* areProductsleft = () => {
    if (this.state.products.length >= 4) {
      let currentproduct = {};
      let productsFour = [];
      currentproduct = this.state.products.shift();
      productsFour.push(currentproduct);
      currentproduct = this.state.products.shift();
      productsFour.push(currentproduct);
      currentproduct = this.state.products.shift();
      productsFour.push(currentproduct);
      currentproduct = this.state.products.shift();
      productsFour.push(currentproduct);
      this.setState({ productsPack: productsFour });
      return true;
    } else {
      return false;
    }
  }; */

  /*   getProducts = () => {
    let currentproduct = {};
    let fourProducts = [];

    currentproduct = this.state.products.shift();
    fourProducts.push(currentproduct);
    currentproduct = this.state.products.shift();
    fourProducts.push(currentproduct);
    currentproduct = this.state.products.shift();
    fourProducts.push(currentproduct);
    currentproduct = this.state.products.shift();
    fourProducts.push(currentproduct);

    return fourProducts;
  }; */

  render() {
    return (
      <Container>
        <h3 className="title-category-prdocut-display">
          {this.props.category}
        </h3>
        <hr />
        <SortingBar />
        {this.state.products.map(
          ({ name, image, price, rating, availableOnline, availableStore }) => (
            <ProductRow
              image={image}
              price={price}
              rating={rating}
              name={name}
              availableOnline={availableOnline}
              availableStore={availableStore}
            />
          )
        )}
      </Container>
    );
  }
}

export default ProductDisplay;
