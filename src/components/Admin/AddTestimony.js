import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDatabase, ref, get, update, push, set } from "firebase/database";
import { app } from "../../firebaseConfig";
import AdminLayout from "./AdminLayout";
import { IoPersonCircleOutline, IoCloudUploadOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { useAlert } from "../Contexts/AlertContext";

function AddTestimony() {
  const { id } = useParams();
  const [testimony, setTestimony] = useState("");
  const [reviewer_name, setReviewerName] = useState("");
  const [reviewer_position, setReviewerPosition] = useState("");
  const [company_logo, setCompanyLogo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [existingImage, setExistingImage] = useState("");
  const { showAlert } = useAlert();

  useEffect(() => {
    if (id) {
      const db = getDatabase(app);
      const testimonyRef = ref(db, `our_testimony/${id}`);

      get(testimonyRef).then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setTestimony(data.testimony);
          setReviewerName(data.reviewerName);
          setReviewerPosition(data.reviewerPosition);
          setExistingImage(data.companyLogo);
        }
      });
    }
  }, [id]);

  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
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
          setCompanyLogo(webpDataUrl);
        };
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = existingImage;

      if (company_logo) {
        const imageData = new FormData();
        imageData.append("file", company_logo);
        imageData.append("upload_preset", "doubles_image");
        imageData.append("folder", "our_testimony");

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

      const db = getDatabase(app);
      if (id) {
        // Update existing testimony
        await update(ref(db, `our_testimony/${id}`), {
          testimony: testimony,
          reviewerName: reviewer_name,
          reviewerPosition: reviewer_position,
          companyLogo: imageUrl,
        });
        showAlert("Testimony updated successfully!", "success");
      } else {
        // Create new testimony
        const newTestimonyRef = push(ref(db, "our_testimony"));
        await set(newTestimonyRef, {
          testimony: testimony,
          reviewerName: reviewer_name,
          reviewerPosition: reviewer_position,
          companyLogo: imageUrl,
        });
        showAlert("New testimony added!", "success");
      }

      setTestimony("");
      setReviewerName("");
      setReviewerPosition("");
      setCompanyLogo(null);
      setPreview(null);
      e.target.reset();
    } catch (error) {
      alert("Error: " + error.message, "error");
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
                All Testimony
              </a>
              <span className="text-gray-300"> / </span>
              <p className="font-medium text-[#0A4251]">Add Testimony</p>
            </p>
          </div>
          <h1 className="font-medium text-lg md:text-2xl pt-6 pb-4">
            {id ? "Edit Testimony" : "Add Testimonials"}
          </h1>
          <div className="flex-col space-y-8 md:space-y-0 md:flex md:flex-row justify-between md:space-x-10">
            {/* Left Side - File Upload */}
            <div className="w-full rounded-xl shadow-md border pt-8 p-4 px-7">
              <p className="pb-5 text-sm">Add Client Logo</p>
              <label className="border-2 border-dashed border-[#0A4251] p-6 w-full flex flex-col items-center justify-center text-gray-500 cursor-pointer rounded-lg">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                  className="hidden"
                />
                {preview ? (
                  <img src={preview} alt="Preview" className="object-cover" />
                ) : (
                  <>
                    <IoCloudUploadOutline size={48} className="text-gray-400" />
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
            </div>

            <div className="w-full">
              {/* Right Side - Form Inputs */}
              <form
                onSubmit={handleSubmit}
                className="pt-8 px-7 py-5 bg-[#F5F5FF] border rounded-xl shadow-md"
              >
                <div className="space-y-4">
                  <div>
                    <p className="text-sm pb-2">Reviewer Name</p>
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      value={reviewer_name}
                      onChange={(e) => setReviewerName(e.target.value)}
                      required
                      className="text-sm md:text-base border p-2 w-full rounded-md"
                    />
                  </div>
                  <div>
                    <p className="text-sm pb-2">Reviewer Position</p>
                    <input
                      type="text"
                      placeholder="e.g. Brand Manager"
                      value={reviewer_position}
                      onChange={(e) => setReviewerPosition(e.target.value)}
                      required
                      className="text-sm md:text-base border p-2 w-full rounded-md"
                    />
                  </div>
                  <div>
                    <p className="text-sm pb-2">Testimony</p>
                    <input
                      type="text"
                      placeholder="Write Testimony..."
                      value={testimony}
                      onChange={(e) => setTestimony(e.target.value)}
                      required
                      className="text-sm md:text-base border p-2 w-full rounded-md"
                    />
                  </div>
                  <div className="flex justify-end pt-10">
                    <button
                      type="submit"
                      className="bg-[#0A4251] text-sm text-white p-2 rounded-lg w-[70%] md:w-[40%] flex items-center justify-center gap-2 hover:bg-[#086173]"
                      disabled={loading}
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
                      {loading
                        ? "Saving..."
                        : id
                        ? "Update Testimony"
                        : "Publish Testimony"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AddTestimony;
