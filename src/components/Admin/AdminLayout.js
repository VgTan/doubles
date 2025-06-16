import Sidebar from "./SideBar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex md:w-full md:min-h-screen">
      <Sidebar />
      <main className="flex-1 font-poppins">{children}</main>
    </div>
  );
};

export default AdminLayout;
