import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const EditOrderForm = ({ order, onSave, onClose }) => {
  const [status, setStatus] = useState(order.status);
  const [notes, setNotes] = useState(order.notes || "");

  const handleSave = () => {
    try {
      onSave({ ...order, status, notes }); // حفظ التعديلات
      toast.dismiss(); // إيقاف أي Toast قديم
      toast.success("تم التعديل بنجاح!", {
        position: "bottom-right",
        autoClose: 3000,
      }); // عرض رسالة نجاح
      onClose(); // إغلاق الفورم
    } catch (error) {
      toast.dismiss(); // إيقاف أي Toast قديم
      toast.error("حدث خطأ أثناء التعديل!", {
        position: "bottom-right",
        autoClose: 3000,
      }); // عرض رسالة خطأ
      console.error("Error saving order:", error);
    }
  };

  return (
    <div className="space-y-4 min-w-[300px] max-w-[400px] p-4 bg-white rounded-lg shadow-md">
      <div>
        <label className="block mb-2">الحالة</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="pending">قيد المراجعة</option>
          <option value="accepted">مقبول</option>
          <option value="rejected">مرفوض</option>
        </select>
      </div>
      <div>
        <label className="block mb-2">الملاحظات</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button
          onClick={onClose}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          إلغاء
        </button>
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          حفظ
        </button>
      </div>
    </div>
  );
};

EditOrderForm.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.oneOf(["pending", "accepted", "rejected"]).isRequired,
    notes: PropTypes.string,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EditOrderForm;
