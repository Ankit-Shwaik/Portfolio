import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import LandingPage from "./Component/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Component/About";
import Services from "./Component/Services";
import ContactUs from "./Component/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<ContactUs />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
