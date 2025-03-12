import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: "https://api.endak.co/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ إضافة التوكن تلقائيًا من الكوكيز لكل الطلبات
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("authToken"); // استرجاع التوكن من الكوكيز
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ التعامل مع الأخطاء في الاستجابة
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized! Redirecting to login...");
      // ممكن تضيف هنا كود لحذف التوكن وتوجيه المستخدم لصفحة تسجيل الدخول
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
