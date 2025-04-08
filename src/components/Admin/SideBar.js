import { Link, useLocation } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { PiHandshake, PiPackage, PiPencilLine, PiUserCircle, PiFileText, PiChatCenteredText } from "react-icons/pi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../firebaseConfig";

const Sidebar = () => {
  const location = useLocation();

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
        // {
        //   name: "Content Plans",
        //   path: "/admin/content-plans",
        //   icon: <FaClipboardList />,
        // },
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
          icon: <PiPencilLine/>,
        },
        { name: "Packages", path: "/admin/all-package", icon: <PiPackage /> },
      ],
    },
  ];

  return (
    <aside className="w-68 min-h-screen bg-white shadow-md p-7 font-poppins">
      {/* Top section */}
      <IconContext.Provider
        value={{ color: "black", className: "global-class-name", size: "20" }}
      >
        <div className="mb-6 flex space-x-2 items-center">
          <img src="../images/mainlogo.webp" className="w-8 h-8 rounded-full" />
          <h2 className="text-lg font-semibold">
            <span className="text-[#0A4251]">DoubleS Creative</span>
          </h2>
        </div>

        {/* Navigation Menu */}
        {menuSections.map((section, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-gray-400 text-sm uppercase mb-2">
              {section.title}
            </h3>
            <ul>
              {section.items.map((item) => (
                <li key={item.path} className="mb-2">
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-2 rounded-xl transition-all ${
                      location.pathname === item.path
                        ? "bg-[#0A4251]/20 text-black"
                        : "text-gray-600 hover:bg-[#0A4251]/10"
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Logout */}
        <IconContext.Provider
          value={{
            color: "red",
            className: "global-class-name",
            size: "20",
          }}
        >
          <div className="mt-6">
            <button
              onClick={handleLogout}
              className="flex items-center space-x-3 text-red-500 px-4 py-2 hover:bg-red-100 rounded-md"
            >
              <FiLogOut className="text-lg" />
              <span>Log Out</span>
            </button>
          </div>
        </IconContext.Provider>

        {/* Bottom Branding */}
        <div className="mt-6 text-gray-400 text-sm text-center">
          DoubleS Creative
        </div>
      </IconContext.Provider>
    </aside>
  );
};

export default Sidebar;
