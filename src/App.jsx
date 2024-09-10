import React from "react";
import PostList from "./Pages/Posts/PostList";
import ProductList from "./Pages/Ecommerce/ProductList";
import NavbarMenu from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import StepForm from "./Pages/Step-Form/StepForm";
import ContactUs from "./Pages/Contact/Contact";

const App = () => (
  <Router>
    <NavbarMenu />
    <div className="mt-16">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/step-form" element={<StepForm />} />
        <Route path="/ecommerce" element={<ProductList />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  </Router>
);

export default App;
