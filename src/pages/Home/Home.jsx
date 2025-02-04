import { Helmet } from "react-helmet"
import Banner from "./Banner"
import FirstSection from "./FirstSection"

const Home = () => {
  return (
    <div className="overflow-hidden">
                      <Helmet>
        <title> منصة عندك ||  الرئيسية    </title>
        <meta name="description" content=" شركة عندك لخدمات الأعمال برؤية طموحة تهدف إلى تطوير قطاع التوصيل في المملكة العربية السعودية من خلال تقديم حلول تقنية ولوجستية مبتكرة. بدأت الشركة بفكرة بسيطة: تسهيل عمليات التوصيل وربط التجار بالعملاء بطريقة أكثر كفاءة وفعالية. ومع مرور الوقت، نجحنا في تطوير منصة متكاملة تدعم مختلف نماذج الأعمال (B2B، B2B2C، B2C)، مما جعلنا في طليعة الشركات التي تقدم حلولًا لوجستية ذكية في السوق." />
        <meta name="keywords" content="عندك, شركة عندك, خدمات عندك, منتجات عندك , توصيل سريع , شركة توصيل , شحن في السعودية" />
      </Helmet>
    <Banner/>
      <FirstSection/>
    </div>
  )
}

export default Home
