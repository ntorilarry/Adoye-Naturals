import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductDetails from "./pages/ProductDetails";
import PageNotFound from "./pages/PageNotFound";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import FogetPassword from "./pages/ForgetPassword";
import AllProducts from "./pages/AllProducts";
import BarSoap from "./pages/BarSoap";
import BodyButter from "./pages/BodyButter";
import SocialImpact from "./pages/SocialImpact";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Main Routes */}
        <Route>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/product-details/:id"
            element={<ProductDetails/>}
          />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/bar-soaps" element={<BarSoap />} />
          <Route path="/body-butters" element={<BodyButter />} />
          <Route path="/social-impact" element={<SocialImpact />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget-password" element={<FogetPassword />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
