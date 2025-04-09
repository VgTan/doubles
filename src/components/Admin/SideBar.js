import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiLogOut, FiMenu } from "react-icons/fi";
import {
  PiHandshake,
  PiPackage,
  PiPencilLine,
  PiUserCircle,
  PiFileText,
  PiChatCenteredText,
} from "react-icons/pi";
import { IconContext } from "react-icons";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../firebaseConfig";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // Toggle for mobile

  const handleLogout = async () => {
    const auth = getAuth(app);
    try {
      await signOut(auth);
      console.log("User signed out.");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  const menuSections = [
    {
      title: "Admin Panel",
      items: [
        { name: "Users", path: "/admin/all-user", icon: <PiUserCircle /> },
        {
          name: "Acceptance Letter",
          path: "/admin/acceptance-letter",
          icon: <PiFileText />,
        },
        { name: "Messages", path: "/admin/all-message", icon: <PiChatCenteredText /> },
      ],
    },
    {
      title: "Pages",
      items: [
        { name: "Clients", path: "/admin/add-client", icon: <PiHandshake /> },
        {
          name: "Testimonials",
          path: "/admin/all-testimony",
          icon: <PiPencilLine />,
        },
        { name: "Packages", path: "/admin/all-package", icon: <PiPackage /> },
      ],
    },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow-lg"
      >
        <FiMenu size={24} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 bg-white w-64 min-h-screen p-7 font-poppins shadow-md transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static`}
      >
        <IconContext.Provider
          value={{ color: "black", className: "global-class-name", size: "20" }}
        >
          {/* Logo */}
          <div className="mb-6 flex space-x-2 items-center">
            <img src="../images/mainlogo.webp" className="w-8 h-8 rounded-full" />
            <h2 className="text-md md:text-lg font-semibold text-[#0A4251]">DoubleS Creative</h2>
          </div>

          {/* Navigation */}
          {menuSections.map((section, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-gray-400 text-xs md:text-sm uppercase mb-2">{section.title}</h3>
              <ul>
                {section.items.map((item) => (
                  <li key={item.path} className="text-sm md:text-md mb-2">
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-3 px-4 py-2 rounded-xl transition-all ${
                        location.pathname === item.path
                          ? "bg-[#0A4251]/20 text-black"
                          : "text-gray-600 hover:bg-[#0A4251]/10"
                      }`}
                    >
                      <span className="text-sm md:text-lg">{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Logout */}
          <IconContext.Provider value={{ color: "red", size: "20" }}>
            <div className="mt-6">
              <button
                onClick={handleLogout}
                className="flex items-center space-x-3 text-red-500 px-4 py-2 hover:bg-red-100 rounded-md"
              >
                <FiLogOut className="text-md md:text-lg" />
                <span className="text-sm md:text-md">Log Out</span>
              </button>
            </div>
          </IconContext.Provider>

          {/* Branding */}
          <div className="mt-6 text-gray-400 text-sm text-center">
            DoubleS Creative
          </div>
        </IconContext.Provider>
      </aside>

      {/* Overlay on mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
