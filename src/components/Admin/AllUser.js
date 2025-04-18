import { useState, useEffect } from "react";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { app } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

function AllUser() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const db = getDatabase(app);
    const usersRef = ref(db, "users");

    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        console.log(data);
        const usersArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setUsers(usersArray);
        setFilteredUsers(usersArray);
      } else {
        setUsers([]);
        setFilteredUsers([]);
      }
    });
  }, []);

  useEffect(() => {
    let filtered = users.filter(
      (usr) =>
        (usr.name || "")
          .toLowerCase()
          .includes((searchQuery || "").toLowerCase()) ||
        (usr.email || "")
          .toLowerCase()
          .includes((searchQuery || "").toLowerCase()) ||
        (usr.phone_number || "")
          .toLowerCase()
          .includes((searchQuery || "").toLowerCase())
    );

    if (filterType !== "All") {
      filtered = filtered.filter((usr) => usr.role === filterType);
    }

    setFilteredUsers(filtered);
  }, [searchQuery, filterType, users]);

  const confirmDelete = (id) => {
    setSelectedUsers(id);
    setShowModal(true);
  };

  const handleDeleteConfirmed = () => {
    if (selectedUsers) {
      const db = getDatabase(app);
      remove(ref(db, `users/${selectedUsers}`));
      setShowModal(false);
      setSelectedUsers([]);
    }
  };

  const handleCheckboxChange = (id) => {
    setSelectedUsers((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((testId) => testId !== id)
        : [...prevSelected, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedUsers.length === filteredUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(filteredUsers.map((t) => t.id));
    }
  };

  const handleDeleteSelected = () => {
    const db = getDatabase(app);
    selectedUsers.forEach((id) => remove(ref(db, `users/${id}`)));
    setSelectedUsers([]);
  };

  const roles = ["All", ...new Set(users.map((t) => t.role))];

  return (
    <AdminLayout>
      <div className="flex-col justify-center">
        <div className="flex items-center justify-end border border-b-2 border-gray-200 h-20 px-8 md:px-12">
          <IconContext.Provider
            value={{
              color: "#0A4251",
              className: "global-class-name",
              size: "26",
            }}
          >
            <div className="flex">
              <IoPersonCircleOutline />
              <h1 className="font-semibold text-lg tracking-wide pl-2 text-[#0A4251]">
                Hello Admin!
              </h1>
            </div>
          </IconContext.Provider>
        </div>

        <div className="py-8 md:py-12 px-8 md:px-14">
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
              <p className="text-[#0A4251] font-medium">All Users</p>
            </p>
          </div>

          {/* START TABLE */}
          <div className="flex-col md:flex-row md:flex items-center pt-6 pb-4">
            <div className="basis-1/3">
              <h1 className="font-medium text-lg md:text-2xl md:pb-0 pb-2">All Users</h1>
            </div>
            {/* Search Bar & Filter Dropdown */}
            <div className="flex-col md:flex-row md:flex justify-end basis-[100%] md:basis-[80%] md:space-x-4 text-sm">
              <input
                type="text"
                placeholder="🔎 Search user..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border p-2 bg-[#FAFAFA] w-2/3 md:w-1/3 rounded mb-3 md:mb-0 mr-3 md:mr-0"
              />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="border p-2 rounded mb-3 md:mb-0"
              >
                {roles.map((pos, index) => (
                  <option key={index} value={pos}>
                    {pos}
                  </option>
                ))}
              </select>
              <div className="flex space-x-2 md:space-x-4">
                {selectedUsers.length > 0 && (
                  <button
                    onClick={handleDeleteSelected}
                    className="bg-red-500 text-white p-2 rounded text-xs md:text-sm"
                  >
                    Delete Selected ({selectedUsers.length})
                  </button>
                )}

                <a
                  href="/admin/add-user"
                  className="bg-[#0A4251] text-white text-xs md:text-sm p-2 rounded flex items-center justify-center gap-2 hover:bg-[#086173]"
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
                  Add New User
                </a>
              </div>
            </div>
          </div>

          {/* TABLE */}
          <div className="hidden md:block space-y-4">
            <table className="w-full border-collapse border-2 border-[#EAECF0]">
              <thead className="bg-[#F5F5FF]">
                <tr className="text-left text-sm">
                  <th className="p-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4"
                      onChange={handleSelectAll}
                      checked={
                        selectedUsers.length === filteredUsers.length &&
                        filteredUsers.length > 0
                      }
                    />
                  </th>
                  <th className="p-2 font-normal">Users</th>
                  <th className="p-2 font-normal">Phone Number</th>
                  <th className="p-2 font-normal">Roles</th>
                  <th className="p-2 font-normal">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers && filteredUsers.length > 0 ? (
                  filteredUsers.map((usr) => (
                    <tr
                      key={usr.id}
                      className="border-2 border-[#EAECF0] h-[80px] text-[#232D42]"
                    >
                      <td className="p-4">
                        <input
                          type="checkbox"
                          className="w-4 h-4"
                          checked={selectedUsers.includes(usr.id)}
                          onChange={() => handleCheckboxChange(usr.id)}
                        />
                      </td>
                      <td className="p-2">
                        <div className="flex flex-col">
                          <p className="capitalize">{usr.name}</p>
                          <p>{usr.email}</p>
                        </div>
                      </td>
                      <td className="p-2 px-2">{usr.phone_number}</td>
                      <td className="p-2 px-2 capitalize">{usr.role}</td>
                      <td className="p-2 px-2">
                        <div className="flex items-center h-full">
                          <button
                            className="text-[#667085] hover:text-red-500"
                            onClick={() => confirmDelete(usr.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              class="w-5 h-5"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-4">
                      No usr. available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* TABLE MOBILE */}
          <div className="block md:hidden space-y-4">
            {filteredUsers && filteredUsers.length > 0 ? (
              filteredUsers.map((usr) => (
                <div
                  key={usr.id}
                  className="border border-[#EAECF0] rounded-lg shadow-sm p-4 text-sm text-[#232D42]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <p className="font-semibold capitalize">{usr.name}</p>
                      <p className="text-gray-500 text-xs">{usr.email}</p>
                    </div>
                    <input
                      type="checkbox"
                      className="w-4 h-4"
                      checked={selectedUsers.includes(usr.id)}
                      onChange={() => handleCheckboxChange(usr.id)}
                    />
                  </div>

                  <details className="mt-3">
                    <summary className="cursor-pointer text-[#667085] text-sm hover:underline">
                      More Details
                    </summary>
                    <div className="mt-2 space-y-1">
                      <p>
                        <span className="font-medium">Phone:</span>{" "}
                        {usr.phone_number}
                      </p>
                      <p>
                        <span className="font-medium">Role:</span>{" "}
                        <span className="capitalize">{usr.role}</span>
                      </p>
                      <div className="flex justify-end mt-2">
                        <button
                          className="text-red-500"
                          onClick={() => confirmDelete(usr.id)}
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
                      </div>
                    </div>
                  </details>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No users available</p>
            )}
          </div>
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

export default AllUser;
