import { useEffect, useState } from "react";
import CountUp from "react-countup";

import axiosInstance from "../../URL/axiosConfig";
import { GetStock } from "../../URL/URL";

const StockStatus = () => {
  // حالة لتخزين البيانات من API
  const [stockData, setStockData] = useState({
    totalShares: 0,
    soldShares: 0,
    reservedShares: 0,
    availableShares: 0,
  });

  const [loading, setLoading] = useState(true);

  const fetchStockData = async () => {
    try {
      const response = await axiosInstance.get(GetStock);
      const data = response.data.data;

      setStockData({
        totalShares: data.totalShares,
        soldShares: data.soldShares,
        reservedShares: data.reservedShares,
        availableShares: data.availableShares,
      });

      setLoading(false);
    } catch (error) {
      console.error("Error fetching stock data:", error);
      setLoading(false);
    }
  };

  // جلب البيانات عند تحميل المكون
  useEffect(() => {
    fetchStockData();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 dir="ltr" className="text-2xl font-bold text-[#4CAF50] mb-6">
          📊 حالة الأسهم المتاحة للاستثمار
        </h2>
        <p className="text-center text-gray-600">جاري تحميل البيانات...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 dir="ltr" className="text-2xl font-bold text-[#4CAF50] mb-6">
        📊 حالة الأسهم المتاحة للاستثمار
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* إجمالي الأسهم المطروحة */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
          <h3 className="text-gray-600 text-lg font-medium">
            إجمالي الأسهم المطروحة
          </h3>
          <p className="text-3xl font-bold text-[#4CAF50] mt-2">
            <CountUp end={stockData.totalShares} duration={3} separator="," />
          </p>
        </div>

        {/* عدد الأسهم التي تم بيعها */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
          <h3 className="text-gray-600 text-lg font-medium">الأسهم المباعة</h3>
          <p className="text-3xl font-bold text-yellow-500 mt-2">
            <CountUp end={stockData.soldShares} duration={3} separator="," />
          </p>
        </div>

        {/* عدد الأسهم المحجوزة */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
          <h3 className="text-gray-600 text-lg font-medium">الأسهم المحجوزة</h3>
          <p className="text-3xl font-bold text-red-500 mt-2">
            <CountUp
              end={stockData.reservedShares}
              duration={3}
              separator=","
            />
          </p>
        </div>

        {/* عدد الأسهم المتبقية */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
          <h3 className="text-gray-600 text-lg font-medium">الأسهم المتبقية</h3>
          <p className="text-3xl font-bold text-green-500 mt-2">
            <CountUp
              end={stockData.availableShares}
              duration={3}
              separator=","
            />
          </p>
        </div>
      </div>

      {/* ملاحظة */}
      <div dir="rtl" className="text-center text-gray-600 mt-6">
        📉{" "}
        {(
          ((stockData.soldShares + stockData.reservedShares) /
            stockData.totalShares) *
          100
        ).toFixed(0) || 0}
        % من الأسهم تم بيعها أو حجزها!
        <br />⏳ تبقى{" "}
        <CountUp
          end={stockData.availableShares || 0}
          duration={3}
          separator=","
        />{" "}
        سهم فقط – احجز استثمارك الآن قبل نفاد الفرصة!
      </div>
    </div>
  );
};

export default StockStatus;
