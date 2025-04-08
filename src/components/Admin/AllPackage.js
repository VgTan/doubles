import { useState, useEffect } from "react";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { app } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { useAlert } from "../Contexts/AlertContext";

function AllPackage() {
  const [packages, setPackages] = useState([]);
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const navigate = useNavigate();
  const { showAlert } = useAlert();

  useEffect(() => {
    const db = getDatabase(app);
    const packagesRef = ref(db, "our_packages");

    onValue(packagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const packagesArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setPackages(packagesArray);
        setFilteredPackages(packagesArray);
      } else {
        setPackages([]);
        setFilteredPackages([]);
      }
    });
  }, []);

  useEffect(() => {
    let filtered = packages.filter((pkg) =>
      pkg.packageName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filterType !== "All") {
      filtered = filtered.filter((pkg) => pkg.packagePrice === filterType);
    }

    setFilteredPackages(filtered);
  }, [searchQuery, filterType, packages]);

  const confirmDelete = (id) => {
    setSelectedPackage(id);
    setShowModal(true);
    showAlert("Package successfully deleted!", "success")
  };

  const handleDeleteConfirmed = () => {
    if (selectedPackage) {
      const db = getDatabase(app);
      remove(ref(db, `our_packages/${selectedPackage}`));
      setShowModal(false);
      setSelectedPackage(null);
      showAlert("Package successfully deleted!", "success")
    }
  };

  const handleEdit = (pkg) => {
    navigate(`/admin/add-package/${pkg.id}`);
  };

  const priceOptions = [
    "All",
    ...new Set(packages.map((pkg) => pkg.packagePrice)),
  ];

  return (
    <AdminLayout>
      <div className="flex flex-col justify-center">
        <div className="flex items-center justify-end border-b-2 border-gray-200 h-20 px-12">
          <IconContext.Provider value={{ color: "#0A4251", size: "26" }}>
            <div className="flex">
              <IoPersonCircleOutline />
              <h1 className="font-semibold text-lg tracking-wide pl-2 text-[#0A4251]">
                Hello (Admin Name)
              </h1>
            </div>
          </IconContext.Provider>
        </div>
      </div>

      <div className="py-12 px-14">
        {/* SMALL NAVIGATION */}
        <div>
          <p className="flex items-center space-x-2">
            <a href="/admin/dashboard">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="cursor-pointer text-black w-5 h-5 hover:text-[#0A4251]/85"
                viewBox="0 0 16 16"
              >
                <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
              </svg>
            </a>
            <span className="text-gray-300"> / </span>
            <p className="text-[#0A4251] font-medium">All Packages</p>
          </p>
        </div>

        <div className="flex items-center pt-6 pb-4">
          <div className="basis-1/3">
            <h1 className="font-medium text-2xl">All Packages</h1>
          </div>
          <div className="flex justify-end basis-2/3 space-x-4 text-sm">
            <input
              type="text"
              placeholder="🔎 Search packages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border p-2 bg-[#FAFAFA] w-1/3 rounded"
            />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="border p-2 rounded"
            >
              {priceOptions.map((price, index) => (
                <option key={index} value={price}>
                  {price}
                </option>
              ))}
            </select>

            <a
              href="/admin/add-package"
              className="bg-[#0A4251] text-white p-2 rounded flex items-center gap-2 hover:bg-[#086173]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-4 h-4"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
              Add New Package
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5 pt-4">
          {filteredPackages.length > 0 ? (
            filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="border-2 rounded-md shadow-md px-7 p-5 flex flex-col w-full h-full"
              >
                {pkg.packageImage && (
                  <img
                    src={pkg.packageImage}
                    alt="Package Image"
                    className="w-full h-52 object-cover"
                  />
                )}
                <div className="w-full flex flex-col flex-1">
                  <h2 className="text-lg text-[#0A4251] font-semibold pt-4 pb-1 capitalize">
                    {pkg.packageName}
                  </h2>
                  <ul className="list-disc list-inside flex-1 pb-5">
                    {pkg.packageContent.map((item, index) => (
                      <li
                        key={index}
                        className="text-sm text-[#0A4251] text-clip"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <p className="text-[#0A4251] text-right font-semibold pb-4 capitalize">
                      Price: {pkg.packagePrice}
                    </p>
                    <div className="flex items-center justify-end space-x-3">
                      <button
                        onClick={() => confirmDelete(pkg.id)}
                        className="text-[#0A4251] hover:text-red-500"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="w-5 h-5"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleEdit(pkg)}
                        className="text-[#0A4251] hover:text-red-500"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="w-5 h-5"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path
                            fillRule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No packages available</p>
          )}
        </div>
      </div>

      {/* Delete Confirmation PopUP */}
      <ConfirmDeleteModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleDeleteConfirmed}
      />
    </AdminLayout>
  );
}

export default AllPackage;
