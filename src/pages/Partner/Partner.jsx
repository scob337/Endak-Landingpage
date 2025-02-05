  import { Helmet } from "react-helmet";
import FormInfo from "./FormInfo";

  const Partner = () => {
    return (
      <div
        dir="rtl"
        id="contact-us"
        className="overflow-hidden w-[100%]
  bg-white py-16 px-4 dark:bg-slate-900 sm:px-6 lg:px-8 lg:py-24 "
      >
                              <Helmet>
        <title> منصة عندك ||  كن شريكا معنا    </title>
        <meta name="description" content=" شركة عندك لخدمات الأعمال برؤية   وطموح     تهدف  إلى تطوير قطاع التوصيل في المملكة العربية السعودية من خلال تقديم حلول تقنية ولوجستية مبتكرة. بدأت الشركة بفكرة بسيطة: تسهيل عمليات التوصيل وربط التجار بالعملاء بطريقة أكثر كفاءة وفعالية. ومع مرور الوقت، نجحنا في تطوير منصة متكاملة تدعم مختلف نماذج الأعمال (B2B، B2B2C، B2C)، مما جعلنا في طليعة الشركات التي تقدم حلولًا لوجستية ذكية في السوق." />
        <meta name="keywords" content="عندك, شركة عندك, خدمات عندك, منتجات عندك , توصيل سريع , شركة توصيل , شحن في السعودية" />
      </Helmet>
        <div className="relative mx-auto lg:max-w-[65%] w-full">
        <FormInfo />

          <div className="text-center">
            <h1 className="mx-auto  font-display text-[24px] font-bold tracking-normal text-slate-900 ">هل ترغب في الانضمام إلى منصة         <span className="relative whitespace-nowrap text-[#00be3c]">
            <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-[#00be3c]" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
            <span className="relative">عندك</span>
        </span> كتاجر؟</h1>
            <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-slate-400">
              إذا كنت تمتلك متجرًا أو نشاطًا تجاريًا وترغب في توسيع نطاق مبيعاتك
              عبر منصتنا، انضم إلينا الآن واستفد من خدمات التوصيل الذكية.
            </p>
          </div>

          <div className="mt-12 w-full">
            <div className="bg-white rounded-lg shadow relative m-10">
              <div className="p-6 space-y-6">
                <form action="#">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="fullName"
                        className="text-sm font-medium text-gray-900 block mb-2"
                      >
                        الاسم الكامل
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        className="shadow-sm outline-0 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#00be3c] focus:border-[#00be3c] block w-full p-2.5"
                        required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="namecat"
                        className="text-sm font-medium text-gray-900 block mb-2"
                      >
                        اسم المتجر / النشاط التجاري
                      </label>
                      <input
                        type="text"
                        name="namecat"
                        id="namecat"
                        className="shadow-sm outline-0 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#00be3c] focus:border-[#00be3c] block w-full p-2.5"
                        required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="type"
                        className="text-sm font-medium text-gray-900 block mb-2"
                      >
                        نوع المنتجات / الخدمات
                      </label>
                      <input
                        type="text"
                        name="type"
                        id="type"
                        className="shadow-sm outline-0 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#00be3c] focus:border-[#00be3c] block w-full p-2.5"
                        required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-900 block mb-2"
                      >
                        البريد الإلكتروني
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="shadow-sm outline-0 bg-gray-50 border border-gray-300  text-gray-900 sm:text-sm rounded-lg focus:ring-[#00be3c] focus:border-[#00be3c] block w-full p-2.5"
                        required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="tel"
                        className="text-sm font-medium text-gray-900 block mb-2"
                      >
                        رقم الهاتف
                      </label>
                      <input
                        type="tel"
                        name="tel"
                        id="tel"
                        className="shadow-sm outline-0  bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#00be3c] focus:border-[#00be3c] block w-full p-2.5"
                        required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="category"
                        className="text-sm font-medium text-gray-900 block mb-2"
                      >
                        المدينة / المنطقة
                      </label>
                      <input
                        type="text"
                        name="category"
                        id="category"
                        className="shadow-sm outline-0 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#00be3c] focus:border-[#00be3c] block w-full p-2.5"
                        required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="brand"
                        className="text-[15px] font-medium text-gray-900 block mb-2"
                      >
                        رقم السجل التجاري / وثيقه العمل الحر
                      </label>
                      <input
                        type="text"
                        name="brand"
                        id="brand"
                        className="shadow-sm outline-0 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#00be3c] focus:border-[#00be3c] block w-full p-2.5"
                        required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="price"
                        className="text-[16px] font-medium text-gray-900 block mb-2"
                      >
                        رابط المتجر الإلكتروني (إن وجد)
                      </label>
                      <input
                        type="text"
                        name="price"
                        id="price"
                        className="shadow-sm outline-0 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#00be3c] focus:border-[#00be3c] block w-full p-2.5"
                        required
                      />
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="product-details"
                        className="text-sm font-medium text-gray-900 block mb-2"
                      >
                        ملاحظات إضافية
                      </label>
                      <textarea
                        id="product-details"
                        rows="6"
                        className="bg-gray-50 outline-0 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#00be3c] focus:border-[#00be3c] block w-full p-4"
                      ></textarea>
                    </div>
                  </div>
                  <button
                  className="cursor-pointer
                  mt-5
                  hover:bg-[#00be3c] hover:text-white ring-1 ring-[#00be3c] text-[#00be3c]  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  type="submit"
                >
                  انضم إلينا الآن وابدأ في توسيع نطاق أعمالك!
                </button>
                </form>
              </div>


            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Partner;
