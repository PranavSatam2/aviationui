import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AddProduct from "./components/AddProduct";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AddProduct" element={<AddProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
