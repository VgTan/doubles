import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Package from "./components/Package";
import Test from "./components/Test";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/package" element={<Package />} />
          <Route path="/test" element={<Test />} />
          {/* <Route path="/contactus" element={<ContactUs />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
