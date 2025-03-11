import { useState } from "react";
import PropTypes from "prop-types";

const FilterSection = ({ filters, onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterChange = (status) => {
    setActiveFilter(status);
    onFilterChange(status);
  };

  return (
    <div
    dir="rtl"
      className="flex gap-2 w-full p-4 bg-gray-100 justify-center">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => handleFilterChange(filter.value)}
          className={`px-2 lg:px-4 text-center  py-2 rounded ${
            activeFilter === filter.value
              ? "bg-blue-500 text-white"
              : "bg-white"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

FilterSection.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

FilterSection.defaultProps = {
  filters: [
    { value: "all", label: "الكل" },
    { value: "pending", label: "قيد المراجعة" },
    { value: "accepted", label: "مقبول" },
    { value: "rejected", label: "مرفوض" },
  ],
  onFilterChange: () => {},
};

export default FilterSection;
