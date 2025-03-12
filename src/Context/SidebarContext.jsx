import { createContext, useContext, useState } from "react";
import { PropTypes } from "prop-types";

// إنشاء Context
const SidebarContext = createContext();

// Provider Component
export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Hook لاستخدام Context
export const useSidebar = () => {
  return useContext(SidebarContext);
};

SidebarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
