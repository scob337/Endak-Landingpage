import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axiosInstance from "../URL/axiosConfig";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false); // ✅ حالة اللودينج
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // ✅ تشغيل اللودينج
    try {
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });

      if (response.status === 200) {
        const token = response.data.data.token;

        if (token) {
          Cookies.set("authToken", token, { expires: rememberMe ? 30 : null }); // 30 يوم لو اختار "Remember Me"
          navigate("/dashboard");
        }
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("خطأ في تسجيل الدخول!");
    } finally {
      setLoading(false); // ✅ إيقاف اللودينج بعد انتهاء العملية
    }
  };

  return (
    <div className="h-screen w-full flex justify-center text-right items-center dark:bg-gray-900">
      <div className="grid gap-8">
        <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-[26px] m-4">
          <div className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg p-10 m-2">
            <h1 className="pt-8 pb-6 font-bold dark:text-gray-400 text-5xl text-center">
              تسجيل دخول
            </h1>
            <form onSubmit={handleLogin} className="space-y-4 ">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 dark:text-gray-400 text-lg"
                >
                  البريد الالكتروني
                </label>
                <input
                  id="email"
                  className="border text-right p-3 dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                  type="email"
                  placeholder="البريد الالكتروني"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading} // ✅ تعطيل الحقل أثناء اللودينج
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 dark:text-gray-400 text-lg"
                >
                  الرقم السري
                </label>
                <input
                  id="password"
                  className="border text-right p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                  type="password"
                  placeholder="الرقم السري"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading} // ✅ تعطيل الحقل أثناء اللودينج
                />
              </div>
              <div className="flex items-center justify-start flex-row-reverse gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="mr-2 accent-green-700"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  disabled={loading} // ✅ تعطيل الزر أثناء اللودينج
                />
                <label
                  htmlFor="remember"
                  className="dark:text-gray-400 text-sm"
                >
                  تذكرني
                </label>
              </div>
              <button
                className="bg-gradient-to-r dark:text-gray-300 from-green-500 to-green-700 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-green-700 hover:to-green-300 transition duration-300 ease-in-out flex justify-center items-center"
                type="submit"
                disabled={loading} // ✅ تعطيل الزر أثناء اللودينج
              >
                {loading ? ( // ✅ تغيير الزر إلى سبينر أثناء اللودينج
                  <svg
                    className="animate-spin h-5 w-5 mr-3 border-t-2 border-white rounded-full"
                    viewBox="0 0 24 24"
                  ></svg>
                ) : (
                  "دخول"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
