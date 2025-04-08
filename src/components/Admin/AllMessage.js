import { useState, useEffect } from "react";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { app } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

function AllMessage() {
  const [messages, setMessages] = useState([]);
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [selectedMessages, setSelectedMessages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const db = getDatabase(app);
    const messagesRef = ref(db, "messages");

    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        console.log(data);
        const messagesArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setMessages(messagesArray);
        setFilteredMessages(messagesArray);
      } else {
        setMessages([]);
        setFilteredMessages([]);
      }
    });
  }, []);

  useEffect(() => {
    let filtered = messages.filter(
      (msg) =>
        (msg.name || "")
          .toLowerCase()
          .includes((searchQuery || "").toLowerCase()) ||
        (msg.email || "")
          .toLowerCase()
          .includes((searchQuery || "").toLowerCase()) ||
        (msg.phone_number || "")
          .toLowerCase()
          .includes((searchQuery || "").toLowerCase()) ||
        (msg.message || "")
          .toLowerCase()
          .includes((searchQuery || "").toLowerCase())
    );

    setFilteredMessages(filtered);
  }, [searchQuery, filterType, messages]);

  const confirmDelete = (id) => {
    setSelectedMessages(id);
    setShowModal(true);
  };

  const handleDeleteConfirmed = () => {
    if (selectedMessages) {
      const db = getDatabase(app);
      remove(ref(db, `messages/${selectedMessages}`));
      setShowModal(false);
      setSelectedMessages([]);
    }
  };

  const handleCheckboxChange = (id) => {
    setSelectedMessages((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((testId) => testId !== id)
        : [...prevSelected, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedMessages.length === filteredMessages.length) {
      setSelectedMessages([]);
    } else {
      setSelectedMessages(filteredMessages.map((t) => t.id));
    }
  };

  const handleDeleteSelected = () => {
    const db = getDatabase(app);
    selectedMessages.forEach((id) => remove(ref(db, `messages/${id}`)));
    setSelectedMessages([]);
  };

  return (
    <AdminLayout>
      <div className="flex-col justify-center">
        <div className="flex items-center justify-end border border-b-2 border-gray-200 h-20 px-12">
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
                Hello (Admin Name)
              </h1>
            </div>
          </IconContext.Provider>
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
              <p className="text-[#0A4251] font-medium">All Messages</p>
            </p>
          </div>

          {/* START TABLE */}
          <div className="flex items-center pt-6 pb-4">
            <div className="basis-1/3">
              <h1 className="font-medium text-2xl">All Messages</h1>
            </div>
            {/* Search Bar & Filter Dropdown */}
            <div className="flex justify-end basis-[80%] space-x-4 text-sm">
              <input
                type="text"
                placeholder="🔎 Search message..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border p-2 bg-[#FAFAFA] w-1/3 rounded"
              />
              {selectedMessages.length > 0 && (
                <button
                  onClick={handleDeleteSelected}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  Delete Selected ({selectedMessages.length})
                </button>
              )}
            </div>
          </div>

          {/* TABLE */}
          <table className="w-full border-collapse border-2 border-[#EAECF0]">
            <thead className="bg-[#F5F5FF]">
              <tr className="text-left text-sm">
                <th className="p-4">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    onChange={handleSelectAll}
                    checked={
                      selectedMessages.length === filteredMessages.length &&
                      filteredMessages.length > 0
                    }
                  />
                </th>
                <th className="p-2 font-normal">Users</th>
                <th className="p-2 font-normal">Phone Number</th>
                <th className="p-2 font-normal">Messages</th>
                <th className="p-2 font-normal"></th>
              </tr>
            </thead>
            <tbody>
              {filteredMessages && filteredMessages.length > 0 ? (
                filteredMessages.map((msg) => (
                  <tr
                    key={msg.id}
                    className="border-2 border-[#EAECF0] h-[80px] text-[#232D42]"
                  >
                    <td className="p-4">
                      <input
                        type="checkbox"
                        className="w-4 h-4"
                        checked={selectedMessages.includes(msg.id)}
                        onChange={() => handleCheckboxChange(msg.id)}
                      />
                    </td>
                    <td className="p-2 w-1/4">
                      <div className="flex flex-col">
                        <p className="capitalize">{msg.name}</p>
                        <p>{msg.email}</p>
                      </div>
                    </td>
                    <td className="p-2 px-2">{msg.phone_number}</td>
                    <td className="p-2 px-4 max-w-[200px]">
                      <p className="">{msg.message}</p>
                    </td>
                    <td className="p-2 px-2">
                      <div className="flex items-center h-full">
                        <button
                          className="text-[#667085] hover:text-red-500"
                          onClick={() => confirmDelete(msg.id)}
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
                    No msg. available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
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

export default AllMessage;
