import Sidebar from "./SideBar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 font-poppins">{children}</main>
    </div>
  );
};

export default AdminLayout;