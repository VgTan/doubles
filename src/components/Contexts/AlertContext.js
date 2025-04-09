import React, { createContext, useContext, useState, useEffect } from "react";
import { BiMessageSquareCheck, iMessageSquareX, BiMessageSquareError } from "react-icons/bi";

const AlertContext = createContext();

export const useAlert = () => useContext(AlertContext);

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({ show: false, message: "", type: "success" });

  const showAlert = (message, type = "success") => {
    setAlert({ show: true, message, type });
  };

  useEffect(() => {
    if (alert.show) {
      const timeout = setTimeout(() => {
        setAlert({ show: false, message: "", type: "success" });
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [alert]);

  const baseStyle = "fixed top-5 left-1/2 -translate-x-1/2 z-50 px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 text-sm md:text-lg";
  const styles = {
    success: "bg-green-100 text-green-700 border border-green-300",
    error: "bg-red-100 text-red-700 border border-red-300",
    warning: "bg-yellow-100 text-yellow-700 border border-yellow-300",
  };

  const icons = {
    success: <BiMessageSquareCheck className="w-4 h-4 md:w-5 md:h-5" />,
    error: <iMessageSquareX className="w-4 h-4 md:w-5 md:h-5" />,
    warning: <BiMessageSquareError className="w-4 h-4 md:w-5 md:h-5" />,
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alert.show && (
        <div className={`${baseStyle} ${styles[alert.type]}`}>
          {icons[alert.type]}
          <span>{alert.message}</span>
        </div>
      )}
    </AlertContext.Provider>
  );
};
