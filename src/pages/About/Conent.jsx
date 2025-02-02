// import Button from "../../Components/SingleComponents/Button";

import Button from "../../Components/SingleComponents/Button";

    const Content = () => {
    return (
<section className="" dir="rtl">
  <div className="container max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
    <div>
      <h2 className="text-3xl font-bold text-center sm:text-5xl">من نحن : </h2>
      <p className="max-w-3xl mx-auto mt-4 text-xl text-center ">شركة "عندك" هي منصة سعودية مبتكرة تهدف إلي تقديم حلول توصيل متكاملة باستخدام أحدث التقنيات اللوجستية. تأسست الشركة علي رؤية طموحة لتوفير تجربة سلسة وفعالة للتجار والعملاء من خلال توفير خدمات توصيل سريعة وموثوقة.       </p>
    </div>
    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
      <div>
        <div className="mt-4 space-y-12">
          <div className="flex">
            <div className="ml-4">
              <h4 className="text-lg font-medium">رؤيتنا  :</h4>
              <p className="mt-2 ">أن نكون الخيار الأول لحلول التوصيل في المملكة والمنطقة</p>
            </div>
          </div>
          <div className="flex">
            <div className="ml-4">
              <h4 className="text-lg font-medium">رسالتنا  : </h4>
              <p className="mt-2 ">تقديم حلول تقنية ولوجستية متطورة تعزز من كفاءة الأعمال وتحسن تجربة العملاء</p>
            </div>
          </div>
          <div className="flex">
            <div className="ml-4">
              <h4 className="text-lg font-medium">قيمنا </h4>
              <p className="mt-2 ">الابتكار , السرعة , الجودة , الشفافية</p>
            </div>
          </div>

        </div>
      </div>
      <div aria-hidden="true" className="mt-10 lg:mt-0">
        <img width="600" height="600" src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8Y29tcHV0ZXJ8ZW58MHwwfHx8MTY5OTE3MDk1N3ww&ixlib=rb-4.0.3&q=80&w=1080" className="mx-auto rounded-lg shadow-lg dark-bg-gray-500"/>
      </div>
      
      <div><Button href="/contact"> تواصل معنا</Button></div>
    </div>
  </div>
</section>

    );
    };

    export default Content;
