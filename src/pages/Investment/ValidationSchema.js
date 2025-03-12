import * as Yup from "yup";

const validationSchema = Yup.object({
  fullName: Yup.string().required("الاسم الكامل مطلوب"),
  email: Yup.string()
    .email("البريد الإلكتروني غير صحيح")
    .required("البريد الإلكتروني مطلوب"),
  phone: Yup.string().required("رقم الجوال مطلوب"),
  expectedInvestment: Yup.string().required("مبلغ الاستثمار المتوقع مطلوب"),
  hasInvestmentExperience: Yup.boolean().required("هذا الحقل مطلوب"),
  mainInterest: Yup.string().required("مجال الاهتمام الرئيسي مطلوب"),
  investmentAmount: Yup.number()
    .required("مبلغ الاستثمار مطلوب")
    .positive("يجب أن يكون المبلغ رقمًا موجبًا"),
  note: Yup.string(),
});

export default validationSchema;
