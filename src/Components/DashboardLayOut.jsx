import { useState } from "react";
import Dashboard from "../pages/Dashboard/Main";
import Sidebar from "../pages/Dashboard/Sidebar";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen bg-gray-100 flex ">
      {/* Sidebar */}
      <div
        className={`fixed z-40 lg:relative 
          h-screen bg-white shadow-lg transform transition-all duration-300 ease-in-out ${
            isSidebarOpen ? "left-[-100%]" : "left-0"
          }`}
      >
        <Sidebar onClose={toggleSidebar} />
      </div>

      {/* Main Content */}
      <main className="w-full overflow-y-auto p-4">
        <Dashboard toggleSidebar={toggleSidebar} />
      </main>
    </div>
  );
};

export default DashboardLayout;
