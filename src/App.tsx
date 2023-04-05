import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Main Routes */}
        <Route path="/">
          <Route path="/" element={<Homepage />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          {/* <Route path="/forget-password" element={<ForegetPassword />} />
          <Route path="/verify-email" element={<EmailVerify />} />
     
            <Route path="/dashboard" element={<><Dashboard /></>} />
            <Route path="/users" element={<Users />} /> */}
        </Route>

        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
