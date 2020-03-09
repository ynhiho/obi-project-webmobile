import React, { Component } from "react";
import "./ProductList.css";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subcategories: [
        "Cras justo odio",
        "Dapibus ac facilisis in",
        "Facilisis in",
        "Porta ac consectetur ac",
        "Morbi leo risus",
        "Vestibulum at eros",
        "Aliquam tincidunt mauris eu risus",
        "Dapibus",
        "Nunc dignissim risus id metus",
        "Fusce pellentesque suscipit nibh",
        "Ut aliquam sollicitudin leo",
        "Donec quis dui at",
        "Lorem ipsum dolor",
        "Sollicitudin leo",
        "Risus egestas placerat",
        "Tincidunt mauris eu risus",
        "Elit adipiscing",
        "Pellentesque suscipit"
      ]
    };
  }

  render() {
    this.state.subcategories.sort();
    return (
      <ul className="productlist">
        {this.state.subcategories.map(subcategory => (
          <li> {subcategory} </li>
        ))}
      </ul>
    );
  }
}

export default ProductList;
