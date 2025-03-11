import Dashboard from "../pages/Dashboard/Main";
import Sidebar from "../pages/Dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto  p-4">
        <Dashboard />
      </main>
    </div>
  );
};

export default DashboardLayout;
