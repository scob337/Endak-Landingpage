import PropTypes from "prop-types";

const InputField = ({
  label,
  type,
  name,
  value,
  onChange,
  onBlur,
  touched,
  error,
  required,
  disabled, // إضافة خاصية disabled
}) => {
  return (
    <div className="relative mb-6">
      <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
        {label}
        {required && <span className="text-red-500 mr-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled} // تعطيل الحقل إذا كان التحميل قيد التشغيل
        className={`block w-full px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border ${
          touched && !error
            ? "border-green-400"
            : touched && error
            ? "border-red-400"
            : "border-gray-300"
        } rounded-lg placeholder-gray-400 focus:outline-none ${
          disabled ? "bg-gray-100 cursor-not-allowed" : ""
        }`}
      />
      {touched && error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired, 
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  touched: PropTypes.bool,
  error: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool, 
};
