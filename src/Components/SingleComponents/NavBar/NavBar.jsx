import { useLocation } from "react-router-dom";

const Links = [
  { name: "الصفحة الرئيسية", href: "/" },
  { name: "من نحن", href: "/about" },
  { name: "خدماتنا", href: "/services" },
  { name: "منتجاتنا وخدماتنا", href: "/products" },
  { name: " انضم الينا", href: "/join" },
  { name: " تواصل معنا ", href: "/contact" },
];

const NavBar = () => {
  const location = useLocation();  // الحصول على الـ pathname الحالي

  const isActive = (href) => location.pathname === href;

  return (
    <header className="text-gray-700 body-font border-b border-gray-200">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="/" className="flex title-font font-medium cursor-pointer items-center text-gray-900 mb-4 md:mb-0">
    <img src="../../../../public/Screenshot_1.png" alt="logo" className="object-contain w-[100px] h-[100px] text-white p-2 rounded-full"/>
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
