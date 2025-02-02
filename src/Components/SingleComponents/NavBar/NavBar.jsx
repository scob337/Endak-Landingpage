import { useLocation } from "react-router-dom";

const Links = [
  { name: "الصفحة الرئيسية", href: "/" },
  { name: "من نحن", href: "#" },
  { name: "خدماتنا", href: "#" },
  { name: "منتجاتنا وخدماتنا", href: "#" },
  { name: " انضم الينا", href: "#" },
  { name: " تواصل معنا ", href: "#" },
];

const NavBar = () => {
  const location = useLocation();  // الحصول على الـ pathname الحالي

  const isActive = (href) => location.pathname === href;

  return (
    <header className="text-gray-700 body-font border-b border-gray-200">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">TAILBLOCKS</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap flex-row-reverse items-center text-base justify-center">
          {Links.map((link, index) => (
            <a
  key={index}
  className={`mr-5 relative inline-block overflow-hidden  transition duration-700 py-2
    after:content-[''] after:absolute after:bottom-0 after:left-500 after:w-full after:h-0.5 after:bg-indigo-500
    font-semibold hover:text-gray-900 hover:after:left-0
    ${isActive(link.href) ? 'text-indigo-500' : ''}`}
  href={link.href}
>
  {link.name}
</a>

          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
