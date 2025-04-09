import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";

const PublicLayout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <Outlet />

      {/* Loader Overlay */}
      <div className={`loader-overlay ${!loading ? "slide-up" : ""}`}>
        <img
          src="/video/loader_main.gif"
          alt="Loading..."
          className="loader-gif"
        />
      </div>
    </div>
  );
};

export default PublicLayout;
