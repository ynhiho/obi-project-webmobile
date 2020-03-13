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
      packagedProducts: []
    };
  }

  componentDidMount() {
    fetch("/api/urls/allproducts/" + this.props.category)
      .then(res => res.json())
      .then(productsFromDB => {
        this.setState({ products: productsFromDB });
      });
  }

  packagingProducts = () => {
    let products = this.state.products;
    let productBundle = [];
    let bundledProducts = [];
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      if (productBundle.length < 4) {
        productBundle.push(product);
      } else {
        bundledProducts.push({
          product: productBundle[0],
          product2: productBundle[1],
          product3: productBundle[2],
          product4: productBundle[3]
        });
        productBundle = [];
        productBundle.push(product);
      }
    }

    return bundledProducts;

    /*     this.state.products.map(product => {
      let packagedProductsAll = [];
      let packagedProductsFour = [];

      if (packagedProductsFour.length < 4) {
        packagedProductsFour.push(product);
      } else {
        packagedProductsAll.push(packagedProductsFour);
        packagedProductsFour = [];
        packagedProductsFour.push(product);
      }

      
    }); */
  };

  render() {
    let products = this.packagingProducts();
    console.log(products);

    return (
      <Container>
        <h3 className="title-category-prdocut-display">
          {this.props.category}
        </h3>
        <hr />
        <SortingBar />
        {products[0] !== undefined
          ? products.map(({ product, product2, product3, product4 }) => (
              <ProductRow
                image={[
                  product.image,
                  product2.image,
                  product3.image,
                  product4.image
                ]}
                price={[
                  product.price,
                  product2.price,
                  product3.price,
                  product4.price
                ]}
                rating={[
                  product.rating,
                  product2.rating,
                  product3.rating,
                  product4.rating
                ]}
                name={[
                  product.name,
                  product2.name,
                  product3.name,
                  product4.name
                ]}
                availableOnline={[
                  product.availableOnline,
                  product2.availableOnline,
                  product3.availableOnline,
                  product4.availableOnline
                ]}
                availableStore={[
                  product.availableStore,
                  product2.availableStore,
                  product3.availableStore,
                  product4.availableStore
                ]}
              />
            ))
          : ""}
      </Container>
    );
  }
}

export default ProductDisplay;
