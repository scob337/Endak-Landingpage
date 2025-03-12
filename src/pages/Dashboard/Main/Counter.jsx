import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../../URL/axiosConfig";

const Counter = () => {
  const [shares, setShares] = useState({
    totalShares: "",
    soldShares: "",
    reservedShares: "",
    availableShares: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setShares({ ...shares, [e.target.name]: e.target.value });
  };

  // التحقق من صحة البيانات
  const validateInputs = () => {
    for (const key in shares) {
      if (!shares[key] || isNaN(shares[key]) || shares[key] < 0) {
        toast.error(`يرجى إدخال قيمة صالحة لحقل ${key}`);
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    setLoading(true);
    try {
      const response = await axiosInstance.put("/stock", {
        totalShares: Number(shares.totalShares),
        soldShares: Number(shares.soldShares),
        reservedShares: Number(shares.reservedShares),
        availableShares: Number(shares.availableShares),
      });
      console.log(response);
      toast.success("تم تحديث البيانات بنجاح!");
    } catch (error) {
      toast.error("حدث خطأ أثناء إرسال البيانات!");
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto p-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-medium mb-6">تغيير أرقام الأسهم</h2>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            {/** الأسهم المطروحة */}
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="totalShares"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                إجمالي الأسهم المطروحة
              </label>
              <input
                type="text"
                name="totalShares"
                id="totalShares"
                placeholder="اكتب الرقم"
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                value={shares.totalShares}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            {/** الأسهم المباعة */}
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="soldShares"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                الأسهم المباعة
              </label>
              <input
                type="text"
                name="soldShares"
                id="soldShares"
                placeholder="اكتب الرقم"
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                value={shares.soldShares}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            {/** الأسهم المحجوزة */}
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="reservedShares"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                الأسهم المحجوزة
              </label>
              <input
                type="text"
                name="reservedShares"
                id="reservedShares"
                placeholder="اكتب الرقم"
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                value={shares.reservedShares}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            {/** الأسهم المتبقية */}
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="availableShares"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                الأسهم المتبقية
              </label>
              <input
                type="text"
                name="availableShares"
                id="availableShares"
                placeholder="اكتب الرقم"
                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                value={shares.availableShares}
                onChange={handleChange}
                disabled={loading}
              />
            </div>
          </div>

          {/** زر الإرسال */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg focus:outline-none flex justify-center items-center"
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-3 border-t-2 border-white rounded-full"
                  viewBox="0 0 24 24"
                ></svg>
              ) : (
                "إرسال"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Counter;
