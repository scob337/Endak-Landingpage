import PropTypes from "prop-types"; // تم التصحيح هنا

const RadioField = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  touched,
  error,
  required,
  options,
}) => (
  <div className="relative mb-6">
    <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
      {label} {required && <RequiredIcon />}
    </label>
    <div className="flex gap-x-4">
      {options.map((option) => (
        <label key={option.value} className="inline-flex items-center gap-2 " >
          <input
            type="radio"
            name={name}
            value={option.value}
            onChange={onChange}
            onBlur={onBlur}
            className="text-[#4CAF50] focus:ring-[#4CAF50]"
          />
          <span className="ml-2"> { option.label } </span>
        </label>
      ))}
    </div>
    {touched && error && (
      <div className="text-red-500 text-sm mt-1">{error}</div>
    )}
  </div>
);

const RequiredIcon = () => (
  <svg
    width="7"
    height="7"
    className="ml-1"
    viewBox="0 0 7 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
      fill="#EF4444"
    />
  </svg>
);

// تم التصحيح هنا أيضًا
RadioField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  touched: PropTypes.bool.isRequired,
  error: PropTypes.string,
  required: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RadioField;
