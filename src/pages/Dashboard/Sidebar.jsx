import { useState } from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa"; // تمت إضافة FaTimes
import { FaHome, FaCalendar } from "react-icons/fa";
import Logo from "../../assets/images/Logo.png";
import { useSidebar } from "../../Context/SidebarContext";
import { NavLink } from "react-router-dom";

// روابط الـ Sidebar
const sidebarLinks = [
  {
    icon: FaHome,
    text: "ادارة الطلبات",
    link: "/dashboard",
  },
  {
    icon: FaCalendar,
    text: "الملف الشخصي",
    link: "/dashboard/profile",
  },
];
// مكون الرابط الفرعي
const SidebarLink = ({ link, isHovered }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubLinks = () => {
    if (link.subLinks) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <li>
      <button
        type="button"
        className={`w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 font-semibold text-gray-800 rounded-lg hover:bg-green-500 hover:text-white focus:bg-green-50 focus:outline-hidden dark:bg-neutral-800 dark:hover:bg-green-900 dark:focus:bg-green-900 dark:text-neutral-200`}
        onClick={toggleSubLinks}
      >
        <div className="min-w-[1rem] flex items-center justify-center">
          <link.icon className="size-4" />
        </div>
        <span
          className={`flex-1 overflow-hidden whitespace-nowrap ${
            isHovered ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
        >
          <NavLink to={link.link}>{link.text}</NavLink>
        </span>
      </button>
    </li>
  );
};

// التحقق من أنواع الخصائص
SidebarLink.propTypes = {
  link: PropTypes.shape({
    icon: PropTypes.elementType.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string,
    subLinks: PropTypes.array,
  }).isRequired,
  isHovered: PropTypes.bool.isRequired,
};

// مكون الـ Sidebar الرئيسي
const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { toggleSidebar } = useSidebar(); // استخدام Context
  return (
    <div
      className={`fixed  top-0 left-0 h-full z-50 bg-white  border-gray-200 dark:bg-neutral-800 dark:border-neutral-700
      ${isHovered ? "w-54" : "w-16"} 
      transition-all duration-300 ease-in-out`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex flex-col h-screen overflow-hidden max-h-full ">
        <header className="p-4 flex items-center justify-between">
          <NavLink
            className="flex items-center justify-center focus:outline-hidden focus:opacity-80"
            to="/dashboard"
            aria-label="Brand"
          >
            <img
              src={Logo}
              alt="Website Logo"
              className={`transition-all duration-300 ease-in-out object-contain object-center ${
                isHovered ? "w-24 h-24" : "w-20 h-20"
              }`}
            />
          </NavLink>
          {/* زر إغلاق الـ Sidebar */}
          <button
            onClick={toggleSidebar}
            className="p-2 text-gray-800 hover:text-red-500 focus:outline-none lg:hidden"
          >
            <FaTimes className="size-5" />
          </button>
        </header>

        {/* القائمة */}
        <nav className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
          <ul className="space-y-1">
            {sidebarLinks.map((link, index) => (
              <SidebarLink key={index} link={link} isHovered={isHovered} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;
