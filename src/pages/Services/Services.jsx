import ServicesCard from "./ServicesCard"
import { b2bServices , b2b2cServices , b2cServices} from "./ServicesData"

const Services = () => {
  return (
    
    <div className="container px-6 py-12 mx-auto">
      <h1 className="text-2xl text-center font-semibold text-gray-700 dark:text-white">حلول توصيل متكاملة لكل قطاع</h1>
      
<div className="flex max-md:flex-wrap ">
{b2bServices.map((service, index) => (
        <ServicesCard
        key={index}
        Title={service.Title}
        subTitle={service.subTitle}
        Description={service.Description}
        />
      ))}
            {b2b2cServices.map((service, index) => (
        <ServicesCard
        key={index}
        Title={service.Title}
        subTitle={service.subTitle}
        Description={service.Description}
        />
      ))}
            {b2cServices.map((service, index) => (
        <ServicesCard
        key={index}
        Title={service.Title}
        subTitle={service.subTitle}
        Description={service.Description}
        />
      ))}
</div>
      
    </div>
  )
}

export default Services
