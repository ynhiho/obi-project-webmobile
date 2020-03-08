import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AppNavbar from "./components/AppNavbar";
import TopBar from "./components/TopBar";
import ProductList from "./components/ProductList";
import SubCatDetails from "./components/SubCatDetails";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TopBar />
      <AppNavbar />
      <Row>
        <Col className="col-md-3">
          <ProductList />
        </Col>
        <Col className="col-md-9">
          <SubCatDetails />
        </Col>
      </Row>
    </div>
  );
}

export default App;
