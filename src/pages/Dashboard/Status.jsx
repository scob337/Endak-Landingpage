import { useEffect, useState } from "react";
import axiosInstance from "../../URL/axiosConfig";
import { GetStock } from "../../URL/URL";

const Status = () => {
  const [stockData, setStockData] = useState({
    totalShares: 0,
    soldShares: 0,
    reservedShares: 0,
    availableShares: 0,
  });

  const fetchStockData = async () => {
    try {
      const response = await axiosInstance.get(GetStock);
      const data = response.data.data;
      console.log(data);
      setStockData({
        totalShares: data.totalShares,
        soldShares: data.soldShares,
        reservedShares: data.reservedShares,
        availableShares: data.availableShares,
      });
    } catch (error) {
      console.error("Error fetching stock data:", error);
    }
  };

  useEffect(() => {
    fetchStockData();
  }, []);

  return (
    <div
      dir="rtl"
      className="flex items-center text-right justify-center w-full h-fit text-gray-800 p-10 bg-gray-200"
    >
      {/* Component Start */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 w-full max-w-6xl">
        {/* إجمالي الأسهم */}
        <div className="flex items-center p-4 bg-white rounded-lg shadow-md gap-3">
          <div className="flex-shrink-0 flex items-center justify-center bg-blue-200 h-16 w-16 rounded">
            <svg
              className="w-8 h-8 text-blue-700"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 9h4v2H8V9z" />
            </svg>
          </div>
          <div className="flex-grow flex flex-col">
            <span className="text-2xl font-bold">{stockData.totalShares}</span>
            <span className="text-gray-500">إجمالي الأسهم</span>
          </div>
        </div>

        {/* الأسهم المباعة */}
        <div className="flex items-center p-4 bg-white rounded-lg shadow-md gap-3">
          <div className="flex-shrink-0 flex items-center justify-center bg-red-200 h-16 w-16 rounded">
            <svg
              className="w-8 h-8 text-red-700"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M5 9l4 4 6-6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex-grow flex flex-col">
            <span className="text-2xl font-bold">{stockData.soldShares}</span>
            <span className="text-gray-500">الأسهم المباعة</span>
          </div>
        </div>

        {/* الأسهم المحجوزة */}
        <div className="flex items-center p-4 bg-white rounded-lg shadow-md gap-3">
          <div className="flex-shrink-0 flex items-center justify-center bg-yellow-200 h-16 w-16 rounded">
            <svg
              className="w-8 h-8 text-yellow-700"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9 12l2 2 4-4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex-grow flex flex-col">
            <span className="text-2xl font-bold">
              {stockData.reservedShares}
            </span>
            <span className="text-gray-500">الأسهم المحجوزة</span>
          </div>
        </div>

        {/* الأسهم المتبقية */}
        <div className="flex items-center p-4 bg-white rounded-lg shadow-md gap-3">
          <div className="flex-shrink-0 flex items-center justify-center bg-yellow-200 h-16 w-16 rounded">
            <svg
              className="w-8 h-8 text-yellow-700"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9 12l2 2 4-4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex-grow flex flex-col">
            <span className="text-2xl font-bold">
              {stockData.availableShares}
            </span>
            <span className="text-gray-500">الأسهم المتبقية</span>
          </div>
        </div>
      </div>
      {/* Component End */}
    </div>
  );
};

export default Status;
