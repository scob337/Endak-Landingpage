import { useEffect } from "react";
import MainTitle from "../../Components/SharedComponents/MainTitle"
import CTAServices from "../Services/CTAServices"
import ProductCard from "./ProductCard"
import AOS from "aos";
import "aos/dist/aos.css";
const Products = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div dir="rtl" className="mb-5"           data-aos="fade-up"
    data-aos-duration="800">
      <div className="flex justify-center m-5">
      <MainTitle> اكتشف منتجاتنا المصممة خصيصًا لك</MainTitle>
      </div>

      <ProductCard  />
      <CTAServices> اطلب منتجك الآن وكن جزءًا من ثورة التوصيل!</CTAServices>
    </div>
  )
}

export default Products
