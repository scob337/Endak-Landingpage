const Links = [
  { name: "الصفحة الرئيسية", href: "#" },
  { name: "من نحن", href: "#" },
  { name: "خدماتنا", href: "#" },
  { name: "منتجاتنا وخدماتنا", href: "#" },
  { name: " انضم الينا", href: "#" },
  { name: " تواصل معنا ", href: "#" },
]
const NavBar = () => {
  return (
<header className="text-gray-700 body-font border-b border-gray-200">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="https://tailblocks.cc" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">TAILBLOCKS</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap flex-row-reverse items-center text-base justify-center">
    {
      Links.map((link, index) => (
        <a key={index} className="mr-5 hover:text-gray-900" href={link.href}>{link.name}</a>
      ))
    }
    </nav>

  </div>
</header>
  );
};

export default NavBar;
