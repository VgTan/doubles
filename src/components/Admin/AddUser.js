import React, { useState, useEffect } from "react";
import { getDatabase, push, ref, set, onValue } from "firebase/database";
import { app } from "../../firebaseConfig";
import AdminLayout from "./AdminLayout";
import { IoPersonCircleOutline, IoCloudUploadOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { useAlert } from "../Contexts/AlertContext";

function AddUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhone] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const { showAlert } = useAlert();

  const db = getDatabase(app);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const db = getDatabase(app);
      const newUserRef = push(ref(db, "users"));
      await set(newUserRef, {
        name,
        username,
        email,
        phone_number,
        role,
      });

      showAlert("Successfully Created New User", "success");

      setEmail("");
      setName("");
      setPhone("");
      setUsername("");
      setPassword("");
      setRole("");
      e.target.reset();
    } catch (error) {
      showAlert("Failed to create new user: " + error.message, "error");
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
              <a
                href="/admin/all-testimony"
                className="font-medium hover:text-[#0A4251] hover:underline hover:underline-offset-2"
              >
                All Users
              </a>
              <span className="text-gray-300"> / </span>
              <p className="font-medium text-[#0A4251]">Add User</p>
            </p>
          </div>
          <h1 className="font-medium text-lg md:text-2xl pt-6 pb-4">Add New User</h1>

          <div>
            <form
              onSubmit={handleSubmit}
              className="p-4 px-7 border rounded-xl shadow-md bg-[#FF8C92]/15 text-sm md:text-base"
            >
              <div className="flex w-full justify-between space-x-5 md:space-x-10">
                <div className="w-full">
                  <p className="pb-2">User's Email</p>
                  <input
                    type="email"
                    placeholder="e.g. jhondoe@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border text-sm md:text-base p-2 w-full rounded-lg"
                  />
                </div>
                <div className="w-full">
                  <p className="pb-2">User's Name</p>
                  <input
                    type="text"
                    placeholder="e.g. Jhon Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="border text-sm md:text-base p-2 w-full rounded-lg"
                  />
                </div>
              </div>
              <p className="pt-4 pb-2">User's Username</p>
              <input
                type="text"
                placeholder="e.g. Jhon12"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="border text-sm md:text-base p-2 w-full rounded-lg"
              />
              <p className="pt-4 pb-2">User's Phone Number</p>
              <input
                type="text"
                placeholder="e.g. 081***"
                value={phone_number}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="border text-sm md:text-base p-2 w-full rounded-lg"
              />
              <p className="pt-4 pb-2">User's Password</p>
              <input
                type="password"
                placeholder="e.g. Jhon12"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border text-sm md:text-base p-2 w-full rounded-lg"
              />
              <p className="pt-4 pb-2">User's Role</p>
              <select
                id="style"
                type="text"
                placeholder="e.g. 10 Mio"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                className="border text-sm md:text-base p-2 w-full rounded-md"
              >
                <option value="" disabled hidden>
                  Choose Role
                </option>
                <option value="Default">Default</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
              <div className="flex justify-end pt-10">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#0A4251] text-sm text-white p-2 rounded-lg w-fit md:w-[20%] flex items-center justify-center gap-2 hover:bg-[#086173]"
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
                  {loading ? "Saving..." : "Add New User"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AddUser;
