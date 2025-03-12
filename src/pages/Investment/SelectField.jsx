import PropTypes from "prop-types"; // تم التصحيح هنا

const SelectField = ({
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
      {label} {required && "*"}
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className="block w-full h-11 px-5 py-2.5  leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
      required={required}
    >
      <option value="" disabled>
        اختر {label}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {touched && error && (
      <div className="text-red-500 text-sm mt-1">{error}</div>
    )}
  </div>
);

export default SelectField;

// تم التصحيح هنا أيضًا
SelectField.propTypes = {
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
