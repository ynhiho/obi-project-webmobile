import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppNavbar from "./AppNavbar";
import TopBar from "./TopBar";
import CategoryPage from "./CategoryPage";
import ProductDisplayPage from "./ProductDisplayPage";

class WholePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "Bauen"
    };
  }

  setCategory = clickedCategory => {
    this.setState({ category: clickedCategory });
  };

  render() {
    return (
      <div>
        <TopBar />
        <AppNavbar clickedCategory={category => this.setCategory(category)} />
        <CategoryPage category={this.state.category} />
        {/* <Router>
          <div>
            <Route exact path="/" component={CategoryPage category={this.state.category}} />
            <Route exact path="/products" component={ProductDisplayPage} />
          </div>
          <div>
            <Route exact path="/" component={CategoryPage category={this.state.category}} />
            <Route exact path="/products" component={ProductDisplayPage} />
          </div>
        </Router> */}
      </div>
    );
  }
}

export default WholePage;
