import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Product from "./pages/Product";
import ProductList from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Cart />} />
      <Route path="/product" element={<Product />} />
      <Route path="/productList" element={<ProductList />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
