import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../assets/images/Logo.png";

const Links = [
  { name: "الصفحة الرئيسية", href: "/" },
  { name: "من نحن", href: "/about" },
  { name: "خدماتنا", href: "/services" },
  { name: "منتجاتنا وخدماتنا", href: "/products" },
  { name: "انضم الينا", href: "/join" },
  { name: "انضم كشريك تجاري", href: "/partner" },
  { name: " تقديم طلب استثمار", href: "/investment" },
  { name: "تواصل معنا", href: "/contact" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // للحصول على المسار الحالي

  // دالة لفحص ما إذا كان الرابط هو الرابط الحالي
  const isActive = (href) => location.pathname === href;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <nav
      className="bg-white mb-10 dark:bg-gray-900  sticky  w-full
     z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            loading="lazy"
            src={Logo}
            className="w-[150px] h-[70px] object-cover"
            alt="Logo"
          />
        </Link>

        <button
          type="button"
          className="inline-flex
          cursor-pointer
          items-center p-2 w-10 h-10 justify-center 
          text-sm text-gray-500 rounded-lg min-lg:hidden
           hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:hidden transition-all duration-500 ease-out transform opacity-0 md:opacity-100 max-h-0 md:max-h-none overflow-hidden`}
          id="navbar-sticky"
          style={{
            maxHeight: isMenuOpen ? "500px" : "0",
            opacity: isMenuOpen ? 1 : 0,
            transition: "max-height 0.5s ease-out, opacity 0.5s ease-out",
          }}
        >
          <ul className="font-medium flex flex-col items-end p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {Links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.href}
                  className={`block py-2 px-3 rounded-sm hover:text-[#00be3c] transition-all ${
                    isActive(link.href) ? "text-[#00be3c]" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex w-auto md:order-1">
          <ul className="flex gap-5 flex-row-reverse">
            {Links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.href}
                  className={`block
                    font-semibold
                    rounded-sm hover:text-[#00be3c] transition-all ${
                      isActive(link.href) ? "text-[#00be3c]" : ""
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
