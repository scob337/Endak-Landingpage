
const ServicesCard = ({Title , Description , Index}) => {

  return (
    <div className="p-4 md:w-1/3">
    <div className="flex rounded-lg h-full bg-gray-300 p-8 flex-col">
        <div className="flex items-center mb-3">

        <h2 className="text-gray-900 text-lg title-font font-medium">
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

export default ServicesCard
