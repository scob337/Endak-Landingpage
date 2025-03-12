import { PropTypes } from 'prop-types';
const Header = ({ toggleSidebar }) => {
  return (
    <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">إدارة الطلبات</h1>
      <button
        onClick={toggleSidebar}
        className="lg:hidden p-2 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Header;

Header.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};