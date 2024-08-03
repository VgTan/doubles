import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Package from "./components/Package";
import Navbar from "./components/Navbar";
import {HelmetProvider} from "react-helmet-async"
import "./App.css";
const helmetContext = {}
function App() {
  return (
    <>
      <HelmetProvider context={helmetContext}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/package" element={<Package />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;
