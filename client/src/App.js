import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AppNavbar from "./components/AppNavbar";
import TopBar from "./components/TopBar";
import CategoryPage from "./components/CategoryPage";
import ProductDisplayPage from "./components/ProductDisplayPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TopBar />
      <AppNavbar />
      <Router>
        <div>
          <Route exact path="/" component={CategoryPage} />
          <Route exact path="/products" component={ProductDisplayPage} />
        </div>
      </Router>
    </div>
  );
}

export default App;
