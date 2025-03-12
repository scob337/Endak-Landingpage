import { Helmet } from "react-helmet";
import Banner from "./Banner";
import FirstSection from "./FirstSection";
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "عندك لخدمات التوصيل",
  url: "https://endak.co",
  description:
    "عندك توفر حلول توصيل ذكية ومبتكرة باستخدام أحدث التقنيات لتلبية احتياجات التجار والعملاء.",
  logo: "https://endak.co/assets/Logo-C_W-pMFO.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "جدة",
    addressCountry: "المملكة العربية السعودية",
  },
  email: "info@endak.co",
  telephone: "+966125783379",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+966125783379",
    contactType: "customer service",
    areaServed: "SA",
    availableLanguage: ["Arabic", "English"],
  },
  sameAs: [
    "https://www.instagram.com/3ndakapp/",
    "https://x.com/3ndakapp",
    "https://www.tiktok.com/@3ndakapp",
  ],
};

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>شركة عندك | حلول توصيل مبتكرة وسريعة</title>
        <meta
          name="description"
          content="اكتشف حلول التوصيل الذكية مع 'عندك' – منصة متطورة تربط التجار بالعملاء عبر أحدث تقنيات اللوجستيات لضمان سرعة وكفاءة عالية."
        />
        <meta
          name="keywords"
          content="عندك, توصيل سريع, منصة لوجستية, خدمات الشحن, التوصيل في السعودية, حلول التوصيل"
        />

        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <Banner />
      <FirstSection />
    </div>
  );
};

export default Home;
