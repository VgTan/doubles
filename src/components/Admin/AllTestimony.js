import { useState, useEffect } from "react";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { app } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { useAlert } from "../Contexts/AlertContext";

export default function AllTestimony() {
  const [testimonials, setTestimonials] = useState([]);
  const [filteredTestimonials, setFilteredTestimonials] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [selectedTestimonials, setSelectedTestimonials] = useState([]);
  const navigate = useNavigate();
  const { showAlert } = useAlert();

  useEffect(() => {
    const db = getDatabase(app);
    const testimonialsRef = ref(db, "our_testimony");

    onValue(testimonialsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const testimonialsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setTestimonials(testimonialsArray);
        setFilteredTestimonials(testimonialsArray);
      } else {
        setTestimonials([]);
        setFilteredTestimonials([]);
      }
    });
  }, []);

  useEffect(() => {
    let filtered = testimonials.filter(
      (testimonial) =>
        testimonial.reviewerName
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        testimonial.reviewerPosition
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
    );

    if (filterType !== "All") {
      filtered = filtered.filter(
        (testimonial) => testimonial.reviewerPosition === filterType
      );
    }

    setFilteredTestimonials(filtered);
  }, [searchQuery, filterType, testimonials]);

  const confirmDelete = (id) => {
    setSelectedTestimonials(id);
    setShowModal(true);
  };

  const handleDeleteConfirmed = () => {
    if (selectedTestimonials) {
      const db = getDatabase(app);
      remove(ref(db, `our_testimony/${selectedTestimonials}`));
      setShowModal(false);
      setSelectedTestimonials([]);
      showAlert("Testimony successfully deleted!", "success")
    }
  };

  const handleEdit = (testimonial) => {
    navigate(`/admin/add-testimony/${testimonial.id}`);
  };

  const handleCheckboxChange = (id) => {
    setSelectedTestimonials((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((testId) => testId !== id)
        : [...prevSelected, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedTestimonials.length === filteredTestimonials.length) {
      setSelectedTestimonials([]);
    } else {
      setSelectedTestimonials(filteredTestimonials.map((t) => t.id));
    }
  };

  const handleDeleteSelected = () => {
    const db = getDatabase(app);
    selectedTestimonials.forEach((id) =>
      remove(ref(db, `our_testimony/${id}`))
    );
    setSelectedTestimonials([]);
    showAlert("Testimony successfully deleted!", "success")
  };

  const positions = [
    "All",
    ...new Set(testimonials.map((t) => t.reviewerPosition)),
  ];

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
              <p className="text-[#0A4251] font-medium">All Testimonials</p>
            </p>
          </div>

          {/* START TABLE */}
          <div className="flex items-center pt-6 pb-4">
            <div className="basis-1/3">
              <h1 className="font-medium text-2xl">All Testimonials</h1>
            </div>
            {/* Search Bar & Filter Dropdown */}
            <div className="flex justify-end basis-[80%] space-x-4 text-sm">
              <input
                type="text"
                placeholder="🔎 Search testimony..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border p-2 bg-[#FAFAFA] w-1/3 rounded"
              />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="border p-2 rounded"
              >
                {positions.map((pos, index) => (
                  <option key={index} value={pos}>
                    {pos}
                  </option>
                ))}
              </select>
              {selectedTestimonials.length > 0 && (
                <button
                  onClick={handleDeleteSelected}
                  className="bg-red-500 text-white p-2 rounded w-fit"
                >
                  Delete Selected ({selectedTestimonials.length})
                </button>
              )}
              <div className="flex">
                <a
                  href="/admin/add-testimony"
                  className="bg-[#0A4251] text-white p-2 rounded flex items-center justify-center gap-2 hover:bg-[#086173] w-fit"
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
                  Add New Testimony
                </a>
              </div>
            </div>
          </div>

          {/* TESTIMONY TABLE */}
          <table className="w-full border-collapse border-2 border-[#EAECF0]">
            <thead className="bg-[#F5F5FF]">
              <tr className="text-left text-sm">
                <th className="p-4">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    onChange={handleSelectAll}
                    checked={
                      selectedTestimonials.length ===
                        filteredTestimonials.length &&
                      filteredTestimonials.length > 0
                    }
                  />
                </th>
                <th className="p-2 font-normal">Company</th>
                <th className="p-2 font-normal">Testimony</th>
                <th className="p-2 font-normal">Reviewer</th>
                <th className="p-2 font-normal">Position</th>
                <th className="p-2 font-normal">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTestimonials && filteredTestimonials.length > 0 ? (
                filteredTestimonials.map((testimonial) => (
                  <tr
                    key={testimonial.id}
                    className="border-2 border-[#EAECF0] h-[80px] text-[#232D42]"
                  >
                    <td className="p-4">
                      <input
                        type="checkbox"
                        className="w-4 h-4"
                        checked={selectedTestimonials.includes(testimonial.id)}
                        onChange={() => handleCheckboxChange(testimonial.id)}
                      />
                    </td>
                    <td className="p-2">
                      <img
                        src={testimonial.companyLogo}
                        alt="Company Logo"
                        className="w-16 h-16"
                      />
                    </td>
                    <td className="p-2 px-4 max-w-[180px]">
                      <p className="line-clamp-2 overflow-hidden text-ellipsis">
                        {testimonial.testimony}
                      </p>
                    </td>
                    <td className="p-2 px-4 capitalize">{testimonial.reviewerName}</td>
                    <td className="p-2 px-4 capitalize">{testimonial.reviewerPosition}</td>
                    <td className="p-2 px-4">
                      <div className="flex items-center space-x-4 h-full">
                        <button
                          className="text-[#667085] hover:text-blue-500"
                          onClick={() => handleEdit(testimonial)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            class="w-5 h-5"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                              fill-rule="evenodd"
                              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                            />
                          </svg>
                        </button>
                        <button
                          className="text-[#667085] hover:text-red-500"
                          onClick={() => confirmDelete(testimonial.id)}
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
                  <td colSpan="6" className="text-center py-4">
                    No testimonials available
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
