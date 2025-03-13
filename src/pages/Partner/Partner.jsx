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
          <span className="relative whitespace-nowrap text-[#00be3c]">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-[#00be3c]"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative">عندك</span>
          </span>{" "}
          كتاجر؟
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
