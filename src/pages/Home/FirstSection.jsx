import AOS from 'aos';
import 'aos/dist/aos.css';
import MainTitle from "../../Components/SharedComponents/MainTitle";
import Button from "../../Components/SingleComponents/Button";
import CTA from "./CTA";
import ServicesCard from "./ServicesCard";
import { useEffect } from 'react';

const ServicesData = [
  {
    Title: "التقنيات المتطورة",
    Description:
      "نعتمد علي الذكاء الاصطناعي وتحليل البيانات لتحسين كفاءة التوصيل , مما يتيح عمليات أسرع وأقل تكلفة",
  },
  {
    Title: "مرونة الحلول",
    Description:
      " نقدم حلولا مخصصة تناسب احتياجات التجار والعملاء , بدءا من التوصيل الفوري وصولا إلي إدارة الطلبات بالكامل عبر منصتنا",
  },
  {
    Title: "تسعير شفاف ومنافس",
    Description:
      " نقدم نوذج تسعير عادل يعزز من شراكتنا مع التجار, حيث نوفر عمولات منخفضة للمحلات التجارية التي تضمن أسعاراً عادلة لعملائها",
  },
  {
    Title: "تجربة مستخدم سلسة",
    Description:
      " تصميم سهل الاستخدام لكل  من التجار والعملاء , مما يضمن عمليات طلب سلسة وسريعة.",
  },
  {
    Title: "التوسع المستمر",
    Description:
      " نواصل توسيع نطاق خدماتنا لتغطية مناطق أوسع, مع خطط لتطوير تقنيات جديدة تلبي احتياجات السوف المتنامي.",
  },
];


const FirstSection = () => {

    useEffect(() => {
        AOS.init(); 
      }, []);
    

  return (
    <>
      <section className="text-gray-700 body-font ">
        <div className="container flex px-5 m-auto py-10 md:flex-row-reverse flex-col-reverse items-center gap-5">
          <div 

          data-aos="fade-left"
          data-aos-duration="1000"

          className="right-section gap-5 lg:flex-grow md:w-1/2 lg:pr-5 md:pr-5 flex flex-col md:items-end md:text-right mb-5 md:mb-0 items-start text-right">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-[#00be3c] mb-4">
              حلول التوصيل الذكية والمبتكرة لشركتك
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-gray-500">
              مرحبا بك في "عندك" ، الشركة الرائدة في تقديم خدمات التوصيل الذكية عبر منصة تقنية متطورة. نقدم حلولاً متكاملة تلبي احتياجات التجار والعملاء من خلال تقنيات متقدمة لضمان كفاءة وسرعة عمليات التوصيل.
            </p>

            <div className="flex justify-center">
              <Button className="button" href="/about">
                ابدأ الأن
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-end left-section" >
            <img

            data-aos="fade-right"
            data-aos-duration="1000"

              className="object-cover object-center rounded w-full"
              alt="hero"
              src="https://www2.0zz0.com/2025/02/02/22/149858510.png"
            />
          </div>
        </div>
      </section>
    <div data-aos="fade-up"
    data-aos-duration="1000"
    >
    <CTA />


    </div>

      <section 
      data-aos="fade-up"
      data-aos-duration="1500"
      className="text-gray-700 body-font border-t border-gray-200" dir="rtl">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <MainTitle>تاريخ شركتنا ومايميزها عن المنافسين</MainTitle>
            <p className="text-right text-[18px] font-semibold title-font text-gray-900">
              تأسست شركة عندك لخدمات الأعمال برؤية طموحة تهدف إلي تطوير قطاع التوصيل في المملكة العربية السعودية...
            </p>
          </div>

          <div className="flex flex-wrap m-4">
            <MainTitle>مايميزنا عن المنافسين</MainTitle>
            <ul className="flex flex-wrap -m-4">
              {ServicesData.map((service, index) => (
                <ServicesCard
                  key={index}
                  Index={index}
                  Title={service.Title}
                  Description={service.Description}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstSection;
