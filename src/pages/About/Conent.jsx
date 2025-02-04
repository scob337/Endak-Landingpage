import { useEffect } from 'react';
import IMG from '../../assets/images/Bag.jpg'
import Button from "../../Components/SingleComponents/Button";
import AOS from 'aos';
import 'aos/dist/aos.css';
const ContentData =[
  {
    Title:"من نحن",
    Description:"شركة عندك هي منصة سعودية مبتكرة تهدف إلي تقديم حلول توصيل متكاملة باستخدام أحدث التقنيات اللوجستية. تأسست الشركة علي رؤية طموحة لتوفير تجربة سلسة وفعالة للتجار والعملاء من خلال توفير خدمات توصيل سريعة وموثوقة."
  },
  {
    Title:"رؤيتنا",
    Description:"أن نكون الخيار الأول لحلول التوصيل في المملكة والمنطقة."},
    {
      Title:"رسالتنا",
      Description:"تقديم حلول تقنية ولوجستية متطورة تعزز من كفاءة الأعمال وتحسن تجربة العملاء."
    },
    {
      Title:"قيمنا",
      Description:"الابتكار، السرعة، الجودة، الشفافية."
    }

]

    const Content = () => {
            useEffect(() => {
              AOS.init(); 
              }, []);
    return (
<section className="" dir="rtl">
  <div className="container max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl"
  >
    <div data-aos="fade-up" data-aos-duration="1000">
      <h2 className="text-3xl font-bold text-center sm:text-5xl text-[#00be3c]">من نحن : </h2>
      <p className="max-w-3xl mx-auto mt-4 text-xl text-center ">شركة "عندك" هي منصة سعودية مبتكرة تهدف إلي تقديم حلول توصيل متكاملة باستخدام أحدث التقنيات اللوجستية. تأسست الشركة علي رؤية طموحة لتوفير تجربة سلسة وفعالة للتجار والعملاء من خلال توفير خدمات توصيل سريعة وموثوقة.       </p>
    </div>
    <div className="grid lg:gap-8 gap-10 lg:grid-cols-2 lg:items-center
    reverse-grid
    ">
      <div>
        <div className="mt-4 space-y-12" data-aos="fade-right" data-aos-duration="1000">

        {
          ContentData.map((item,index) => (
            <div className="flex" key={index}>
            <div className="ml-4">
              <h4 className="text-lg font-medium text-[#00be3c]">{item.Title}  : </h4>
              <p className="mt-2 ">{item.Description} </p>
            </div>
          </div>
          ))
        }



        </div>
      </div>
      <div aria-hidden="true" className="mt-10 lg:mt-0" data-aos="fade-left" data-aos-duration="1000">
        <img loading="lazy"  width="600" height="600" src={IMG} alt="من نحن"/>
      </div>
      
    </div>
    <div
    className='flex justify-center mt-5' data-aos="fade-left" data-aos-duration="1000"
    ><Button href="/contact"> تواصل معنا</Button></div>

  </div>
</section>

    );
    };

    export default Content;
