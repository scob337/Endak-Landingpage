import { useEffect } from "react";
import MainTitle from "../../Components/SharedComponents/MainTitle"
import CTAServices from "../Services/CTAServices"
import ProductCard from "./ProductCard"
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
const Products = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div dir="rtl" className="mb-5"           data-aos="fade-up"
    data-aos-duration="800">
                            <Helmet>
        <title> منصة عندك ||  منتجاتنا     </title>
        <meta name="description" content=" شركة عندك لخدمات الأعمال برؤية   وطموح     تهدف  إلى تطوير قطاع التوصيل في المملكة العربية السعودية من خلال تقديم حلول تقنية ولوجستية مبتكرة. بدأت الشركة بفكرة بسيطة: تسهيل عمليات التوصيل وربط التجار بالعملاء بطريقة أكثر كفاءة وفعالية. ومع مرور الوقت، نجحنا في تطوير منصة متكاملة تدعم مختلف نماذج الأعمال (B2B، B2B2C، B2C)، مما جعلنا في طليعة الشركات التي تقدم حلولًا لوجستية ذكية في السوق." />
        <meta name="keywords" content="عندك, شركة عندك, خدمات عندك, منتجات عندك , توصيل سريع , شركة توصيل , شحن في السعودية" />
      </Helmet>
      <div className="flex justify-center m-5">
      <MainTitle> اكتشف منتجاتنا المصممة خصيصًا لك</MainTitle>
      </div>

      <ProductCard  />
      <CTAServices> اطلب منتجك الآن وكن جزءًا من ثورة التوصيل!</CTAServices>
    </div>
  )
}

export default Products
