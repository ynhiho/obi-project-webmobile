import React from "react";
import AppNavbar from "./components/AppNavbar";
import TopBar from "./components/TopBar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TopBar />
      <AppNavbar />
    </div>
  );
}

export default App;
