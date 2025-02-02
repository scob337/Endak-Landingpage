
const ServicesCard = ({Title , Description , subTitle  }) => {
  return (
<section className="bg-white dark:bg-gray-900 " dir="rtl">
    <div className=" px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1  ">

            <div>
                <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div>
                    <h1 className="text-xl font-semibold text-gray-700 dark:text-white">{Title}</h1>

                    {subTitle && (
                        <p className="mt-2 text-gray-500 dark:text-gray-300">{subTitle}</p>
                    )}
                </div>  
                {Description?.map((item, index) => (
              <div key={index} className="mt-4">
                <h2 className="font-medium text-gray-700 dark:text-white">{item.Title}</h2>
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

export default ServicesCard
