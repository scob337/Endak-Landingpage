import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../URL/axiosConfig";

const Partner = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const payload = {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        city: data.city,
        commercialRegNumber: data.commercialRegister,
        storeLink: data.storeLink || "",
        storeName: data.storeName,
        service: data.productType,
      };

      const response = await axiosInstance.post("/partners", payload);

      toast.success("تم الإرسال بنجاح!");
      console.log(response);
    } catch (error) {
      toast.error("حدث خطأ أثناء الإرسال!");
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBlur = async (fieldName) => {
    await trigger(fieldName);
  };

  return (
    <div
      dir="rtl"
      className="w-full bg-white py-16 px-4 dark:bg-slate-900 sm:px-6 lg:px-8 lg:py-24 relative"
    >
      <Helmet>
        <title> شركة عندك | انضم كشريك تجاري ووسّع نطاق أعمالك اليوم</title>
        <meta
          name="description"
          content="انضم إلى منصة عندك كتاجر واستفد من حلول التوصيل الذكية لتوسيع نطاق مبيعاتك. نوفر لك خدمات لوجستية متطورة لزيادة الأرباح وتعزيز نجاحك التجاري"
        />
      </Helmet>

      <div className="relative mx-auto lg:max-w-[65%] w-full">
        <h1 className="text-center text-2xl font-bold text-slate-900">
          هل ترغب في الانضمام إلى منصة{" "}
          <span className="text-[#00be3c]">عندك</span> كتاجر؟
        </h1>
        <div className="mt-12 w-full bg-white rounded-lg shadow p-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-6 gap-6">
              {[
                {
                  id: "fullName",
                  label: "الاسم الكامل",
                  type: "text",
                  required: true,
                },
                {
                  id: "storeName",
                  label: "اسم المتجر / النشاط التجاري",
                  type: "text",
                  required: true,
                },
                {
                  id: "productType",
                  label: "نوع المنتجات / الخدمات",
                  type: "text",
                  required: true,
                },
                {
                  id: "email",
                  label: "البريد الإلكتروني",
                  type: "email",
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  errorMsg: "بريد إلكتروني غير صحيح",
                },
                {
                  id: "phone",
                  label: "رقم الهاتف",
                  type: "tel",
                  required: true,
                  pattern: /^\+?[0-9]{10,15}$/,
                  errorMsg: "ادخل رقم جوال صحيح",
                },
                {
                  id: "city",
                  label: "المدينة / المنطقة",
                  type: "text",
                  required: true,
                },
                {
                  id: "commercialRegister",
                  label: "رقم السجل التجاري",
                  type: "text",
                  required: true,
                },
                {
                  id: "storeLink",
                  label: "رابط المتجر الإلكتروني (إن وجد)",
                  type: "text",
                },
              ].map(({ id, label, type, required, pattern, errorMsg }) => (
                <div key={id} className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor={id}
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    {label}
                  </label>
                  <input
                    type={type}
                    id={id}
                    disabled={isLoading}
                    {...register(id, {
                      required: required ? "هذا الحقل مطلوب" : false,
                      pattern: pattern
                        ? { value: pattern, message: errorMsg }
                        : undefined,
                    })}
                    onBlur={() => handleBlur(id)}
                    className={`shadow-sm outline-0 bg-gray-50 border ${
                      errors[id] ? "border-red-500" : "border-gray-300"
                    } text-gray-900 sm:text-sm rounded-lg focus:ring-[#00be3c] focus:border-[#00be3c] block w-full p-2.5`}
                  />
                  {errors[id] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors[id].message}
                    </p>
                  )}
                </div>
              ))}
              <div className="col-span-full">
                <label
                  htmlFor="notes"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  ملاحظات إضافية
                </label>
                <textarea
                  id="notes"
                  rows="6"
                  disabled={isLoading}
                  {...register("notes")}
                  className="bg-gray-50 outline-0 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#00be3c] focus:border-[#00be3c] block w-full p-4"
                ></textarea>
              </div>
            </div>
            <button
              className="cursor-pointer mt-5 hover:bg-[#00be3c] hover:text-white ring-1 ring-[#00be3c] text-[#00be3c] font-medium rounded-lg text-sm px-5 py-2.5"
              type="submit"
              disabled={isLoading}
            >
              {isLoading
                ? "جاري الإرسال..."
                : "انضم إلينا الآن وابدأ في توسيع نطاق أعمالك!"}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Partner;
