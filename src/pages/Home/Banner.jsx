import Button from "../../Components/SingleComponents/Button"

const Banner = () => {
  return (
<section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div
    className="my-10 
    
    mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row-reverse">
    <div className="text-right" dir="rtl">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">حلول التوصيل الذكية والمبتكرة لشركتك</span>
            <br/>
            <span className="block text-indigo-600 xl:inline">شركة عندك , الحل الأمثل</span>
        </h1>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
    <Button href="/about"> تواصل معنا</Button>
            </div>

        </div>
    </div>

    <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
        <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="../../public/Banner.png" alt=""/>
    </div>
</div>

</section>
  )
}

export default Banner
