import Sidebar from "../pages/Dashboard/Sidebar";
import { Outlet } from "react-router-dom";
import { useSidebar } from "../Context/SidebarContext.jsx";

const DashboardLayout = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();
  const toggleSidebar = () => {
    setIsSidebarOpen();
  };
  return (
    <div className="max-h-screen bg-gray-100 flex ">
      {/* Sidebar */}
      <div
        className={`fixed z-40 lg:relative 
          h-screen bg-white shadow-lg  transform transition-all duration-300 ease-in-out ${
            isSidebarOpen ? "left-[-100%]" : "left-0"
          } lg:left-0`}
      >
        <Sidebar onClose={toggleSidebar} />
      </div>

      {/* Main Content */}
      <main className="w-full overflow-y-auto ">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
