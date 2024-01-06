import "./App.css";
import React, { lazy } from "react";
import TopNavbar from "./components/TopNavbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:pid" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
