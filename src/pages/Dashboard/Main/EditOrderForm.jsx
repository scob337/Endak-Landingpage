import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const EditOrderForm = ({ order, onSave, onClose }) => {
  // State Management
  const [status, setStatus] = useState(order.status);
  const [note, setNotes] = useState(order.note || "");
  const [loading, setLoading] = useState(false); // حالة التحميل

  // Handle Save Function
  const handleSave = async () => {
    try {
      // تفعيل حالة التحميل
      setLoading(true);

      // Create the updated order object
      const updatedOrder = { ...order, status, note };

      // Call the onSave function passed from the parent component
      await onSave(updatedOrder);

      // Close the form
      onClose();
    } catch (error) {
      // Show error message
      toast.error("حدث خطأ أثناء التعديل!", {
        position: "bottom-right",
        autoClose: 3000,
      });
      console.error("Error saving order:", error);
    } finally {
      // تعطيل حالة التحميل
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4 w-[100%] p-4 bg-white rounded-lg shadow-md text-start">
      {/* Status Select Input */}
      <div>
        <label className="block mb-2">الحالة</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className={`w-full p-2 border rounded ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading} // تعطيل الحقل أثناء التحميل
        >
          <option value="pending">قيد المراجعة</option>
          <option value="approved">مقبول</option>
          <option value="rejected">مرفوض</option>
        </select>
      </div>

      {/* Notes Textarea */}
      <div>
        <label className="block mb-2">الملاحظات</label>
        <textarea
          rows="4"
          value={note}
          onChange={(e) => setNotes(e.target.value)}
          className={`w-full p-2 border rounded ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading} // تعطيل الحقل أثناء التحميل
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <button
          onClick={handleSave}
          disabled={loading} // تعطيل الزر أثناء التحميل
          className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? ( // عرض مؤشر التحميل إذا كان التحميل قيد التشغيل
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
            </div>
          ) : (
            "حفظ"
          )}
        </button>
      </div>
    </div>
  );
};

// PropTypes Validation
EditOrderForm.propTypes = {
  order: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    status: PropTypes.oneOf(["pending", "accepted", "rejected"]).isRequired,
    note: PropTypes.string,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EditOrderForm;
