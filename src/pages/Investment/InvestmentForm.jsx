import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Investment } from "../../URL/URL";
import axiosInstance from "../../URL/axiosConfig";
import validationSchema from "./ValidationSchema";
import InputField from "./InputField";
import SelectField from "./SelectField";
import RadioField from "./RadioField";
import StockStatus from "./StockStatus";
import WhyInvest from "./WhyInvestment";
import { useState } from "react"; // Import useState

const InvestmentForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track form submission

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      expectedInvestment: "",
      hasInvestmentExperience: false,
      mainInterest: "",
      investmentAmount: 0,
      note: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true); // Start submission
      try {
        const response = await axiosInstance.post(Investment, {
          ...values,
          investmentAmount: Number(values.investmentAmount), // تحويل القيمة إلى رقم
        });
        console.log(response);
        toast.success("تم إرسال طلبك بنجاح!", {
          position: "bottom-right",
          autoClose: 3000,
        });

        // مسح الحقول بعد الإرسال الناجح
        resetForm();
      } catch (error) {
        if (error.response) {
          toast.error(`فشل في إرسال الطلب: ${error.response.data.message}`, {
            position: "bottom-right",
            autoClose: 3000,
          });
        } else if (error.request) {
          toast.error("فشل في الاتصال بالخادم. يرجى المحاولة مرة أخرى.", {
            position: "bottom-right",
            autoClose: 3000,
          });
        } else {
          toast.error("حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.", {
            position: "bottom-right",
            autoClose: 3000,
          });
        }
      } finally {
        setIsSubmitting(false); // End submission
      }
    },
  });

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-gray-100 flex items-center flex-col justify-center p-4"
    >
      <WhyInvest />
      <StockStatus />
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-8 relative">
        {isSubmitting && (
          <div
            className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center rounded-lg"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }} // خلفية بيضاء شفافة 50%
          >
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#4CAF50]"></div>
          </div>
        )}
        <h1
          dir="ltr"
          className="text-3xl font-bold text-center text-[#4CAF50] mb-6"
        >
          📋 نموذج تقديم طلب الاستثمار
        </h1>

        <p className="text-start text-gray-600 mb-6">
          املأ البيانات أدناه وسيتواصل معك فريقنا خلال 24 ساعة لمناقشة الفرصة
          الاستثمارية.
        </p>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <InputField
            label="الاسم الكامل"
            type="text"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.fullName}
            error={formik.errors.fullName}
            required
            disabled={isSubmitting} // تعطيل الحقل أثناء التحميل
          />

          <InputField
            label="البريد الإلكتروني"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.email}
            error={formik.errors.email}
            required
            disabled={isSubmitting} // تعطيل الحقل أثناء التحميل
          />

          <InputField
            label="رقم الجوال"
            type="tel"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.phone}
            error={formik.errors.phone}
            required
            disabled={isSubmitting} // تعطيل الحقل أثناء التحميل
          />

          <SelectField
            label="مبلغ الاستثمار المتوقع"
            name="expectedInvestment"
            value={formik.values.expectedInvestment}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.expectedInvestment}
            error={formik.errors.expectedInvestment}
            required
            options={[
              { value: "أقل من 50,000 ريال", label: "أقل من 50,000 ريال" },
              {
                value: "بين 50,000 و100,000 ريال",
                label: "بين 50,000 و100,000 ريال",
              },
              { value: "أكثر من 100,000 ريال", label: "أكثر من 100,000 ريال" },
            ]}
            disabled={isSubmitting} // تعطيل الحقل أثناء التحميل
          />

          <RadioField
            label="هل لديك خبرة سابقة في الاستثمار؟"
            name="hasInvestmentExperience"
            value={formik.values.hasInvestmentExperience}
            onChange={(e) => {
              formik.setFieldValue(
                "hasInvestmentExperience",
                e.target.value === "نعم"
              );
            }}
            onBlur={formik.handleBlur}
            touched={formik.touched.hasInvestmentExperience}
            error={formik.errors.hasInvestmentExperience}
            required
            options={[
              { value: "نعم", label: "نعم" },
              { value: "لا", label: "لا" },
            ]}
            disabled={isSubmitting} // تعطيل الحقل أثناء التحميل
          />

          <SelectField
            label="مجال الاهتمام الرئيسي"
            name="mainInterest"
            value={formik.values.mainInterest}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.mainInterest}
            error={formik.errors.mainInterest}
            required
            options={[
              { value: "اللوجستيات", label: "اللوجستيات" },
              { value: "التكنولوجيا", label: "التكنولوجيا" },
              { value: "التجارة الإلكترونية", label: "التجارة الإلكترونية" },
              { value: "أخرى", label: "أخرى" },
            ]}
            disabled={isSubmitting} // تعطيل الحقل أثناء التحميل
          />

          <InputField
            label="مبلغ الاستثمار (بالأرقام)"
            type="number"
            name="investmentAmount"
            value={formik.values.investmentAmount}
            onChange={(e) => {
              formik.setFieldValue("investmentAmount", Number(e.target.value));
            }}
            onBlur={formik.handleBlur}
            touched={formik.touched.investmentAmount}
            error={formik.errors.investmentAmount}
            required
            disabled={isSubmitting} // تعطيل الحقل أثناء التحميل
          />

          <div className="relative mb-6">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              ملاحظات إضافية (اختياري)
            </label>
            <textarea
              name="note"
              value={formik.values.note}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="block w-full h-24 px-5 py-2.5 leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none"
              disabled={isSubmitting} // تعطيل الحقل أثناء التحميل
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting} // Disable button when submitting
            className={`w-full h-12 shadow-sm rounded-full ${
              isSubmitting ? "bg-gray-400" : "bg-[#4CAF50] hover:bg-[#45a049]"
            } transition-all duration-700 text-white text-base font-semibold leading-7`}
          >
            {isSubmitting ? "جاري الإرسال..." : "أرسل طلبك الآن"}
          </button>
        </form>

        <ToastContainer position="bottom-right" autoClose={3000} />
      </div>
    </div>
  );
};

export default InvestmentForm;
