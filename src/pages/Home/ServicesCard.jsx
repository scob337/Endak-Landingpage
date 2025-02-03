import PropTypes from 'prop-types';
const ServicesCard = ({Title , Description , Index}) => {
  return (
    <div className="p-4 md:w-1/3">
    <div className={`flex group rounded-2xl  h-full ring-1 ring-gray-300  shadow-gray-300 p-8 flex-col
    hover:bg-[#00be3c] hover:text-white transition duration-400 hover:cursor-pointer
    ${Index == 0  && "bg-[#00be3c] text-white"}
    
    `}>
        <div className="flex items-center mb-3">

        <h2 className={`text-[#00be3c] text-lg title-font font-medium group-hover:text-white transition 
        duration-400
            ${Index == 0  && " text-white"}
        `}>
            {Index+1} - {Title} 
        </h2>
        </div>
        <div className="flex-grow">
        <p className="leading-relaxed text-base">
            {Description}
        </p>

        </div>
    </div>
    </div>
  )
}
ServicesCard.propTypes = {
  Description: PropTypes.string.isRequired,  
  Title: PropTypes.string.isRequired,   
  Index: PropTypes.number.isRequired,   
};
export default ServicesCard
