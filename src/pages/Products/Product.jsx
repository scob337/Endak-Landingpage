import MainTitle from "../../Components/SharedComponents/MainTitle"
import CTAServices from "../Services/CTAServices"
import ProductCard from "./ProductCard"

const Products = () => {
  return (
    <div dir="rtl" className="mb-5">
      <div className="flex justify-center m-5">
      <MainTitle> اكتشف منتجاتنا المصممة خصيصًا لك</MainTitle>
      </div>

      <ProductCard  />
      <CTAServices> اطلب منتجك الآن وكن جزءًا من ثورة التوصيل!</CTAServices>
    </div>
  )
}

export default Products
