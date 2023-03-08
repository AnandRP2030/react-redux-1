import { useState } from "react";
import "./App.css";
import Header from "./Comoponents/Header";
import { Routes, Route } from "react-router-dom";
import ProductComponenent from "./Comoponents/ProductComponenet";
import ProductDetails from "./Comoponents/ProductDetails";
import ProductList from "./Comoponents/ProductList";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />, <ProductList />
            </div>
          }
        />
        <Route path="/product" element={<ProductComponenent />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="*" element={<h1> 404 </h1>} />
      </Routes>
    </div>
  );
}

export default App;
