import { useEffect } from "react";
import MainTitle from "../../Components/SharedComponents/MainTitle";
import CTAServices from "../Services/CTAServices";
import ProductCard from "./ProductCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
const Products = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div dir="rtl" className="mb-5" data-aos="fade-up" data-aos-duration="800">
      <Helmet>
        <title>شركة عندك | منتجات وخدمات مبتكرة لحلول التوصيل</title>
        <meta
          name="description"
          content="اكتشف مجموعة من الخدمات المتكاملة التي تقدمها 'عندك'، بما في ذلك التطبيقات المخصصة، إدارة الطلبات، والتوصيل السريع."
        />
      </Helmet>

      <div className="flex justify-center m-5">
        <MainTitle> اكتشف منتجاتنا المصممة خصيصًا لك</MainTitle>
      </div>

      <ProductCard />
      <CTAServices> اطلب منتجك الآن وكن جزءًا من ثورة التوصيل!</CTAServices>
    </div>
  );
};

export default Products;
