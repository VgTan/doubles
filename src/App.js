import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRoute from "./components/Admin/AdminRoute";
import { AlertProvider } from "./components/Contexts/AlertContext.js";

// Public Pages
import About from "./components/About";
import Home from "./components/Home";
import Package from "./components/Package";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ContactUs from "./components/ContactUs";
import PublicLayout from "./PublicLayout";

// Admin Pages
import AddClient from "./components/Admin/AddClient";
import AllTestimony from "./components/Admin/AllTestimony";
import AddTestimony from "./components/Admin/AddTestimony";
import AllPackage from "./components/Admin/AllPackage";
import AddPackage from "./components/Admin/AddPackage";
import AllUser from "./components/Admin/AllUser";
import AllMessage from "./components/Admin/AllMessage";

import "./App.css";

function App() {
  return (
    <AlertProvider>
      <Router>
        <Routes>
          {/* Public Routes with Navbar */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/package" element={<Package />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Route>

          {/* Admin Pages without Navbar */}
          <Route
            path="/admin/add-client"
            element={
              <AdminRoute>
                <AddClient />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/all-testimony"
            element={
              <AdminRoute>
                <AllTestimony />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/add-testimony/:id?"
            element={
              <AdminRoute>
                <AddTestimony />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/all-package"
            element={
              <AdminRoute>
                <AllPackage />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/add-package/:id?"
            element={
              <AdminRoute>
                <AddPackage />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/all-user"
            element={
              <AdminRoute>
                <AllUser />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/all-message"
            element={
              <AdminRoute>
                <AllMessage />
              </AdminRoute>
            }
          />
        </Routes>
      </Router>
    </AlertProvider>
  );
}

export default App;