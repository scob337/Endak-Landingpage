import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../URL/axiosConfig";
import Status from "./Status";
import Counter from "./Main/Counter";
import { APIURL } from "../../URL/URL";

const ProfileForm = () => {
  
  const [profileData, setProfileData] = useState({});
  const [email, setEmail] = useState("");

  useEffect(() => {
    const GetProfileData = async () => {
      try {
        const response = await axiosInstance.get(`/${APIURL}`);
        setProfileData(response.data.user);
        setEmail(response.data.user.email);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };
    GetProfileData();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.put(`/${APIURL}`, {
        userName: profileData.userName,
        email: email,
        oldPassword: data.oldPassword,
        password: data.newPassword,
        phone: profileData.phone,
      });

      toast.success("تم تحديث البيانات بنجاح!", {
        position: "bottom-right",
        autoClose: 3000,
      });
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "bottom-right",
        autoClose: 3000,
      });
      console.log("Error updating profile:", error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      dir="rtl"
      className="lg:w-[88%] text-right sm:w-[88%] w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40"
    >
      <h1 className="lg:text-3xl text-center md:text-2xl text-xl font-serif font-extrabold mb-2 dark:text-white">
        تحديث البيانات الشخصية
      </h1>
      <h2 className="text-grey text-center text-sm mb-4 dark:text-gray-400">
        تغيير كلمة المرور
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full mb-4">
          <label htmlFor="name" className="mb-2 dark:text-gray-300">
            الاسم
          </label>
          <input
            value={profileData.userName}
            type="text"
            id="name"
            disabled
            style={{ userSelect: "none", pointerEvents: "none" }}
            className="mt-2 p-4 w-full border-2 rounded-lg opacity-50 dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
            placeholder="الاسم"
          />
        </div>

        <div className="w-full mb-4">
          <label htmlFor="oldPassword" className="mb-2 dark:text-gray-300">
            كلمة المرور القديمة
          </label>
          <input
            type="password"
            id="oldPassword"
            disabled={isLoading}
            {...register("oldPassword", {
              required: "كلمة المرور القديمة مطلوبة",
            })}
            className={`mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800 ${
              errors.oldPassword ? "border-red-500" : "border-green-500"
            }`}
            placeholder="كلمة المرور القديمة"
          />
          {errors.oldPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.oldPassword.message}
            </p>
          )}
        </div>

        <div className="w-full mb-4">
          <label htmlFor="newPassword" className="mb-2 dark:text-gray-300">
            كلمة المرور الجديدة
          </label>
          <input
            type="password"
            id="newPassword"
            disabled={isLoading}
            {...register("newPassword", {
              required: "كلمة المرور الجديدة مطلوبة",
              minLength: {
                value: 7,
                message: "يجب أن تكون كلمة المرور 7  أحرف على الأقل",
              },
              pattern: {
                value: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
                message: "يجب أن تحتوي كلمة المرور على رقم وحرف كبير على الأقل",
              },
            })}
            className={`mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800 ${
              errors.newPassword ? "border-red-500" : "border-green-500"
            }`}
            placeholder="كلمة المرور الجديدة"
          />
          {errors.newPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.newPassword.message}
            </p>
          )}
        </div>

        <div className="w-full rounded-lg bg-blue-500 mt-4 text-white text-lg font-semibold">
          <button type="submit" disabled={isLoading} className="w-full p-4">
            {isLoading ? "جاري التحديث..." : "تحديث البيانات"}
          </button>
        </div>
      </form>
      <Counter />
      <Status />
    </div>
  );
};

export default ProfileForm;
