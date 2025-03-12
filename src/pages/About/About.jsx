import Content from "./Conent";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>من نحن - شركة عندك | حلول التوصيل الذكية</title>
        <meta
          name="description"
          content="تعرف على 'عندك'، الشركة السعودية الرائدة في تقديم حلول التوصيل المتكاملة باستخدام الذكاء الاصطناعي والتقنيات الحديثة لضمان أفضل تجربة للعملاء."
        />
      </Helmet>

      <Content />
    </div>
  );
};

export default About;
