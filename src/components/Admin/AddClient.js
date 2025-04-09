import React, { useState, useEffect } from "react";
import { getDatabase, push, ref, set, onValue } from "firebase/database";
import { app } from "../../firebaseConfig";
import AdminLayout from "./AdminLayout";
import { IoPersonCircleOutline, IoCloudUploadOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { useAlert } from "../Contexts/AlertContext";

function AddClient() {
  const [client_name, setClientName] = useState("");
  const [client_logo, setClientLogo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [clients, setClients] = useState([]);
  const [selectMode, setSelectMode] = useState(false);
  const [selectedClients, setSelectedClients] = useState([]);
  const { showAlert } = useAlert();

  const toggleSelectMode = () => {
    setSelectMode((prev) => !prev);
    setSelectedClients([]);
  };

  const handleClientSelect = (id) => {
    setSelectedClients((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((clientId) => clientId !== id)
        : [...prevSelected, id]
    );
  };

  const handleDeleteSelected = async () => {
    if (!selectedClients.length) return alert("No clients selected.");
    const confirm = window.confirm(
      "Are you sure you want to delete selected clients?"
    );
    if (!confirm) return;

    const db = getDatabase(app);
    try {
      for (const id of selectedClients) {
        await set(ref(db, `our_clients/${id}`), null);
      }
      setSelectedClients([]);
      setSelectMode(false);
      showAlert("Selected clients deleted!", "success");
    } catch (error) {
      showAlert("Failed to delete clients: " + error.message, "error");
    }
  };

  useEffect(() => {
    const db = getDatabase(app);
    const clientsRef = ref(db, "our_clients");

    // Listen for real-time updates
    onValue(clientsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const clientsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setClients(clientsArray);
      } else {
        setClients([]);
      }
    });
  }, []);

  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) processImage(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) processImage(file);
  };

  const processImage = (file) => {
    setPreview(URL.createObjectURL(file));

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const webpDataUrl = canvas.toDataURL("image/webp", 0.5);
        setClientLogo(webpDataUrl);
      };
    };
  };

  const handleSubmit = async (e) => {
    if (!client_name || !client_logo) {
      showAlert("Please enter client name and select a logo.", "warning");
      setLoading(false);
      return;
    }
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = "";

      if (client_logo) {
        const blob = await (await fetch(client_logo)).blob();
        const imageData = new FormData();
        imageData.append("file", blob);
        imageData.append("upload_preset", "doubles_image");
        imageData.append("folder", "our_clients");

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/dljwoqaax/image/upload`,
          {
            method: "POST",
            body: imageData,
          }
        );

        const data = await response.json();
        imageUrl = data.secure_url;
      }

      if (!app) {
        console.error("Firebase app is not initialized!");
        alert("Firebase not initialized!");
        return;
      }

      const db = getDatabase(app);
      const newClientRef = push(ref(db, "our_clients"));
      await set(newClientRef, {
        clientName: client_name,
        clientLogo: imageUrl,
      });

      showAlert("New Client Added!", "success");
      setClientName("");
      setClientLogo(null);
      setPreview(null);
      e.target.reset();
    } catch (error) {
      showAlert("Error: " + error.message, "error");
    }

    setLoading(false);
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
              <p className="text-[#0A4251] font-medium">Our Client</p>
            </p>
          </div>
          <h1 className="font-medium text-lg md:text-2xl pt-6 pb-4">
            Add New Client
          </h1>

          {/* FORM START */}
          <div className="flex-col space-y-8 md:space-y-0 md:flex md:flex-row justify-between md:space-x-10">
            <div className="w-full">
              <form
                onSubmit={handleSubmit}
                className="p-4 px-7 border rounded-xl shadow-md"
              >
                <p className="pb-2">Client Name</p>
                <input
                  type="text"
                  placeholder="e.g. Bricia Beaute"
                  value={client_name}
                  onChange={(e) => setClientName(e.target.value)}
                  required
                  className="border p-2 w-full rounded-lg"
                />
                <p className="pt-4 pb-2">Client Logo</p>
                <label
                  className="border-2 border-dashed border-gray-300 p-6 w-full flex flex-col items-center justify-center text-gray-500 cursor-pointer rounded-lg"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  {preview ? (
                    <img
                      src={preview}
                      alt="Preview"
                      className="object-cover mb-2"
                    />
                  ) : (
                    <>
                      <IoCloudUploadOutline
                        size={48}
                        className="text-gray-400 mb-2"
                      />
                      <p className="text-xs md:text-sm">
                        Drop your files here or{" "}
                        <span className="text-blue-500">Browse</span>
                      </p>
                    </>
                  )}
                </label>
                {preview && (
                  <div className="flex justify-end pt-2">
                    <button
                      onClick={() => setPreview(null)}
                      className="text-red-500 text-sm mt-2 hover:underline hover:underline-offset-2"
                    >
                      Cancel
                    </button>
                  </div>
                )}
                <div className="flex justify-end pt-10">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#0A4251] text-sm text-white p-2 rounded-lg w-fit md:w-[40%] flex items-center justify-center gap-2 hover:bg-[#086173]"
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
                    {loading ? "Uploading..." : "Add New Client"}
                  </button>
                </div>
              </form>
            </div>

            {/* LIST OF CLIENTS */}
            <div className="w-full p-4 px-7 border rounded-xl shadow-md">
              <div className="flex-col md:flex-row md:flex justify-between items-center">
                <p className="pb-4 md:pb-2 font-medium">Our Clients</p>
                <div className="flex gap-2">
                  <button
                    onClick={toggleSelectMode}
                    className="text-sm bg-[#0A4251] text-white px-3 py-1 rounded hover:bg-[#0A4251]/80"
                  >
                    {selectMode ? "Cancel" : "Select to Delete"}
                  </button>
                  {selectMode && (
                    <button
                      onClick={handleDeleteSelected}
                      className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete Selected
                    </button>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 mt-4">
                {clients.map((client) => (
                  <div key={client.id} className="relative">
                    {selectMode && (
                      <input
                        type="checkbox"
                        className="absolute top-2 left-2 w-4 h-4 z-10"
                        checked={selectedClients.includes(client.id)}
                        onChange={() => handleClientSelect(client.id)}
                      />
                    )}
                    <img
                      src={client.clientLogo}
                      alt={client.clientName}
                      className={`w-16 h-16 md:w-28 md:h-28 object-cover mx-auto rounded ${
                        selectMode ? "opacity-90 border border-gray-300" : ""
                      }`}
                      style={{ pointerEvents: selectMode ? "none" : "auto" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AddClient;
