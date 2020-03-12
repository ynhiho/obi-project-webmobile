import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter
} from "react-router-dom";

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
        {/* <CategoryPage category={this.state.category} /> */}
        <BrowserRouter>
          <div>
            <TopBar />
            <AppNavbar
              clickedCategory={category => this.setCategory(category)}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <CategoryPage {...props} category={this.state.category} />
                )}
              />
              <Route exact path="/products" component={ProductDisplayPage} />
            </Switch>
          </div>
          {/*           <div>
            <Route exact path="/" component={CategoryPage category={this.state.category}} />
            <Route exact path="/products" component={ProductDisplayPage} />
          </div> */}
        </BrowserRouter>
      </div>
    );
  }
}

export default WholePage;
