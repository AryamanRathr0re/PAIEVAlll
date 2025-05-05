import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProd } from "./redux/productSlice";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Card";
import CheckOut from "./pages/CheckOut";
import Category from "./pages/Categories";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProd());
  }, [dispatch]);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </Router>
    </>
  );
}
import { formToJSON } from "axios";

export default App;
