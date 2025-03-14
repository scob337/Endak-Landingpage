import { useEffect } from "react";
import { useForm } from "react-hook-form"; // للفاليديشن
import { useState } from "react"; // لحالة التحميل
import { ToastContainer, toast } from "react-toastify"; // للـ Toast
import "react-toastify/dist/ReactToastify.css"; // ستايل الـ Toast
import MainTitle from "../../Components/SharedComponents/MainTitle";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import axiosInstance from "../../URL/axiosConfig";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // تهيئة react-hook-form
  const [isLoading, setIsLoading] = useState(false); // حالة التحميل

  // وظيفة الإرسال للـ API
  const onSubmit = async (data) => {
    setIsLoading(true); // بدء التحميل
    try {
      const response = await axiosInstance.post("/contact-us", data); // إرسال البيانات
      console.log(response);
      toast.success(response.data.message); // إشعار نجاح
    } catch (error) {
      toast.error("حدث خطأ أثناء إرسال الرسالة!"); // إشعار خطأ
      console.log("Error sending message:", error); // ��شعار خطأ
    } finally {
      setIsLoading(false); // إنهاء التحميل
    }
  };

  return (
    <section className="text-gray-600 body-font relative">
      <Helmet>
        <title>تواصل معنا - عندك | استفساراتك محل اهتمامنا</title>
        <meta
          name="description"
          content="تواصل مع شركة عندك لخدمات الأعمال للاستفسارات والدعم. نحن هنا لمساعدتك عبر الهاتف أو البريد الإلكتروني أو وسائل التواصل الاجتماعي"
        />
      </Helmet>
      <div className="flex justify-center">
        <MainTitle> تواصل معنا </MainTitle>
      </div>
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
        >
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d475322.94783854455!2d39.540800257006936!3d21.450439378100928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b118db!2z2KzYr9ipINin2YTYs9i52YjYr9mK2Kk!5e0!3m2!1sar!2seg!4v1738613535722!5m2!1sar!2seg"
            style={{
              filter: "grayscale(1) contrast(1.2) opacity(0.4)",
            }}
          ></iframe>
          <div
            dir="rtl"
            className="bg-white relative flex flex-wrap py-6 rounded shadow-md"
          >
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                العنوان
              </h2>
              <p className="mt-1">جدة، المملكة العربية السعودية.</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                البريد الالكتروني
              </h2>
              <a className="text-[#00be3c] leading-relaxed">info@endak.co</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                رقم الهاتف
              </h2>
              <p className="leading-relaxed">+966 55 716 9496</p>
            </div>
          </div>
        </div>

        <form
          data-aos="fade-down"
          data-aos-duration="1000"
          dir="rtl"
          onSubmit={handleSubmit(onSubmit)}
          className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            دعنا نساعدك
          </h2>

          {/* الاسم */}
          <div className="relative mb-4">
            <label
              htmlFor="fullName"
              className="leading-7 text-sm text-gray-600"
            >
              الاسم
            </label>
            <input
              type="text"
              id="fullName"
              disabled={isLoading}
              {...register("fullName", { required: "هذا الحقل مطلوب" })}
              className="w-full bg-white rounded border border-gray-300 focus:border-[#00be3c] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* البريد الإلكتروني */}
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              البريد الالكتروني
            </label>
            <input
              type="email"
              id="email"
              disabled={isLoading}
              {...register("email", {
                required: "هذا الحقل مطلوب",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "بريد إلكتروني غير صحيح",
                },
              })}
              className="w-full bg-white rounded border border-gray-300 focus:border-[#00be3c] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* رقم الجوال */}
          <div className="relative mb-4">
            <label htmlFor="tel" className="leading-7 text-sm text-gray-600">
              رقم الجوال
            </label>
            <input
              type="tel"
              id="tel"
              disabled={isLoading}
              {...register("phone", {
                required: "هذا الحقل مطلوب",
                pattern: {
                  value: /^\+?[0-9]{10,15}$/,
                  message: "رقم الجوال غير صحيح",
                },
              })}
              className="w-full bg-white rounded border border-gray-300 focus:border-[#00be3c] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {errors.tel && (
              <p className="text-red-500 text-sm mt-1">{errors.tel.message}</p>
            )}
          </div>

          {/* الرسالة */}
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              الرسالة
            </label>
            <textarea
              id="message"
              disabled={isLoading}
              {...register("message", {
                required: "هذا الحقل مطلوب",
                minLength: {
                  value: 10,
                  message: "يجب أن تحتوي الرسالة على 10 أحرف على الأقل",
                },
              })}
              className="w-full bg-white rounded border border-gray-300 focus:border-[#00be3c] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* زر الإرسال */}
          <button
            type="submit"
            disabled={isLoading}
            className="text-[#00be3c] ring-[#00be3c] ring-1 border-0 py-2 px-6 focus:outline-none hover:bg-[#00be3c] hover:text-white rounded text-lg cursor-pointer"
          >
            {isLoading ? "جاري الإرسال..." : "ارسل رسالتك"}
          </button>
        </form>
      </div>
      <ToastContainer /> {/* إضافة الـ Toast */}
    </section>
  );
};

export default Contact;
