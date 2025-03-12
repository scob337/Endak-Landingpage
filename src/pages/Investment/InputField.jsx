import { NumericFormat } from "react-number-format";
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
}) => {
  // إذا كان النوع رقمًا، نستخدم NumericFormat
  if (type === "number") {
    return (
      <div className="relative mb-6">
        <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
          {label} {required && "*"}
        </label>
        <NumericFormat
          name={name}
          value={value}
          onValueChange={(values) => {
            onChange({ target: { name, value: values.value } });
          }}
          onBlur={onBlur}
          thousandSeparator=","
          className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
          required={required}
        />
        {touched && error && (
          <div className="text-red-500 text-sm mt-1">{error}</div>
        )}
      </div>
    );
  }

  // إذا كان النوع نصًا، نستخدم input عادي
  return (
    <div className="relative mb-6">
      <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
        {label} {required && "*"}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
        required={required}
      />
      {touched && error && (
        <div className="text-red-500 text-sm mt-1">{error}</div>
      )}
    </div>
  );
};

export default InputField;

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired, // نوع الحقل (مطلوب)
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  touched: PropTypes.bool,
  error: PropTypes.string,
  required: PropTypes.bool,
};
