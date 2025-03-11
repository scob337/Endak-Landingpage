import { PropTypes } from "prop-types";

const ReusablePopup = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div
      dir="rtl"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl overflow-y-auto max-h-[90vh]">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          <div className="mb-4">{children}</div>
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              إغلاق
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReusablePopup;

ReusablePopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
