import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const ServicesCard = ({Title , Description , subTitle ,AOSDuration , DataAOS , Icon }) => {
          useEffect(() => {
            AOS.init(); 
            }, []);
  return (
<section className="bg-white dark:bg-gray-900 

hover:ring-1 hover:ring-[#00be3c] transition-all duration-700
" dir="rtl"
   data-aos={DataAOS}
   data-aos-duration={AOSDuration}
>
    <div className=" px-6 py-12 mx-auto">
        <div className="grid grid-cols-1  gap-8 ">

            <div>
                <div className="inline-block p-3 text-white bg-[#00be3c] rounded-lg">
                  <img  src={Icon}
                  className='w-10 h-10 object-center object-cover' 
                  />
                </div>

                <div>
                    <h1 className="text-xl font-semibold text-[#00be3c] dark:text-white">{Title}</h1>

                    {subTitle && (
                        <p className="mt-2 text-gray-500 dark:text-gray-300">{subTitle}</p>
                    )}
                </div>  
                {Description?.map((item, index) => (
              <div key={index} className="mt-4">
                <h2 className="font-medium text-[#00be3c] dark:text-white">{item.Title}</h2>
                {item.Description?.map((desc, idx) => (
                  <p key={idx} className="mt-2 text-gray-500 dark:text-gray-300">{desc}</p>
                ))}
              </div>
            ))}
            </div>


        </div>
    </div>
</section>
  )
}
ServicesCard.propTypes = {
  Description: PropTypes.string.isRequired,  
  Title: PropTypes.string.isRequired,   
  subTitle: PropTypes.string.isRequired,   
  AOSDuration: PropTypes.string.isRequired,   
  DataAOS: PropTypes.string.isRequired,
  Icon: PropTypes.string.isRequired,
};
export default ServicesCard