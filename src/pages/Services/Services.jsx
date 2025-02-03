  import { useEffect } from "react";
  import ServicesCard from "./ServicesCard";
  import { b2bServices, b2b2cServices, b2cServices } from "./ServicesData";
  import AOS from "aos";
  import "aos/dist/aos.css";
  import CTAServices from "./CTAServices";
  const Services = () => {
    useEffect(() => {
      AOS.init();
    }, []);
    return (
      <div className="container px-6 py-12 mx-auto">
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
