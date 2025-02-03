import { Link, useLocation } from "react-router-dom";
import Logo from '../../../assets/images/Logo.png'
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
        <Link to="/" className="flex title-font font-medium cursor-pointer items-center text-gray-900 mb-4 md:mb-0">
    <img src={Logo} alt="logo" className="object-contain w-[100px] h-[100px] text-white p-2 rounded-full"/>
        </Link>
        <nav className="md:ml-auto flex flex-wrap flex-row-reverse items-center text-base justify-center">
          {Links.map((link, index) => (
            <Link to={link.href}
  key={index}
  className={`mr-5 relative inline-block overflow-hidden  transition duration-700 py-2
    after:content-[''] after:absolute after:bottom-0 after:left-500 after:w-full after:h-0.5 after:bg-[#00be3c]
    font-semibold hover:text-gray-900 hover:after:left-0
    ${isActive(link.href) ? 'text-[#00be3c]' : ''}`}
  href={link.href}
>
  {link.name}
</Link>

          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
