  import { useEffect } from "react";
  import ServicesCard from "./ServicesCard";
  import { b2bServices, b2b2cServices, b2cServices } from "./ServicesData";
  import AOS from "aos";
  import "aos/dist/aos.css";
  import CTAServices from "./CTAServices";
import { Helmet } from "react-helmet";
  const Services = () => {
    useEffect(() => {
      AOS.init();
    }, []);
    return (
      <div className="container px-6 py-12 mx-auto">
                              <Helmet>
        <title> منصة عندك ||  خدماتنا  </title>
        <meta name="description" content=" شركة عندك لخدمات الأعمال برؤية طموحة تهدف إلى تطوير قطاع التوصيل في المملكة العربية السعودية من خلال تقديم حلول تقنية ولوجستية مبتكرة. بدأت الشركة بفكرة بسيطة: تسهيل عمليات التوصيل وربط التجار بالعملاء بطريقة أكثر كفاءة وفعالية. ومع مرور الوقت، نجحنا في تطوير منصة متكاملة تدعم مختلف نماذج الأعمال (B2B، B2B2C، B2C)، مما جعلنا في طليعة الشركات التي تقدم حلولًا لوجستية ذكية في السوق." />
        <meta name="keywords" content="عندك, شركة عندك, خدمات عندك, منتجات عندك , توصيل سريع , شركة توصيل , شحن في السعودية" />
      </Helmet>
        <h1
          data-aos="fade-up"
          data-aos-duration="700"
          className="text-2xl text-center font-semibold text-[#00be3c] dark:text-white"
        >
          حلول توصيل متكاملة لكل قطاع
        </h1>

        <div className="flex max-lg:flex-wrap gap-2 mt-5 ">
          {b2bServices.map((service, index) => (
            <ServicesCard
              key={index}
              Title={service.Title}
              subTitle={service.subTitle}
              Description={service.Description}
              AOSDuration="700"
              DataAOS="fade-up"
            />
          ))}
          {b2b2cServices.map((service, index) => (
            <ServicesCard
              key={index}
              Title={service.Title}
              subTitle={service.subTitle}
              Description={service.Description}
              AOSDuration="1000"
              DataAOS="fade-up"
            />
          ))}

          {b2cServices.map((service, index) => (
            <ServicesCard
              key={index}
              Title={service.Title}
              subTitle={service.subTitle}
              Description={service.Description}
              AOSDuration="1200"
              DataAOS="fade-up"
            />
          ))}
        </div>
        <div className="mt-10" data-aos="fade-up" data-aos-duration="700">
          <CTAServices >.تواصل معنا لمعرفة كيف يمكننا دعم أعمالك</CTAServices>
        </div>
      </div>
    );
  };

  export default Services;
