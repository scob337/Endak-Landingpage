import { useEffect } from "react";
import MainTitle from "../../Components/SharedComponents/MainTitle"
import Button from "../../Components/SingleComponents/Button"
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
const Join = () => {
      useEffect(() => {
        AOS.init();
      }, []);
  return (

<main 
          data-aos="fade-up"
          data-aos-duration="800"
className="flex  w-full flex-col items-center justify-center text-center px-4  md:h-screen " dir="rtl">
                      <Helmet>
        <title> منصة عندك ||  انضم الينا   </title>
        <meta name="description" content=" شركة عندك لخدمات الأعمال برؤية طموحة تهدف إلى تطوير قطاع التوصيل في المملكة العربية السعودية من خلال تقديم حلول تقنية ولوجستية مبتكرة. بدأت الشركة بفكرة بسيطة: تسهيل عمليات التوصيل وربط التجار بالعملاء بطريقة أكثر كفاءة وفعالية. ومع مرور الوقت، نجحنا في تطوير منصة متكاملة تدعم مختلف نماذج الأعمال (B2B، B2B2C، B2C)، مما جعلنا في طليعة الشركات التي تقدم حلولًا لوجستية ذكية في السوق." />
        <meta name="keywords" content="عندك, شركة عندك, خدمات عندك, منتجات عندك , توصيل سريع , شركة توصيل , شحن في السعودية" />
      </Helmet>
    <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
    انضم لفريق 
        <span className="relative whitespace-nowrap text-[#00be3c]">
            <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-[#00be3c]" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
            <span className="relative">عندك</span>
        </span>
    </h1>
    <p className="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7">
    هل ترغب في أن تكون جزءًا من فريقنا؟ نحن نوفر فرص عمل متميزة في بيئة عمل مرنة ومبتكرة. 
    </p>

<div className="flex flex-col gap-5">
    <MainTitle>الوظائف المتاحة:</MainTitle>
    <div className="flex flex-wrap gap-5">
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">مندوبو توصيل</h5>
</div>

<div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">متخصصو تسويق</h5>
</div>
    </div>
    <Button href="/contact">قدم طلبك الآن!</Button>
</div>
</main>
  )
}

export default Join
