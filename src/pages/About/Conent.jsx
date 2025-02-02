import Button from "../../Components/SingleComponents/Button";

    const Content = () => {
    return (
        <section className="overflow-hidden bg-white py-8 sm:py-16 " >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4" dir="rtl">
                <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                    {" "}
                    من نحن : 
                </h2> 
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                     شركة عندك لحلول التوصيل
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    {" "}
                    شركة "عندك" هي منصة سعودية مبتكرة تهدف إلي تقديم حلول توصيل
                    متكاملة باستخدام أحدث التقنيات اللوجستية. تأسست الشركة علي رؤية
                    طموحة لتوفير تجربة سلسة وفعالة للتجار والعملاء من خلال توفير
                    خدمات توصيل سريعة وموثوقة.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">

                        رؤيتنا : 
                    </dt>
                    <dd className="inline">
                        أن نكون الخيار الأول لحلول التوصيل في المملكة والمنطقة.
                    </dd>
                    </div>
                    <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">

                        رسالتنا :
                    </dt>
                    <dd className="inline">
                        تقديم حلول تقنية ولوجستية متطورة تعزز من كفاءة الأعمال وتحسن
                        تجربة العملاء{" "}
                    </dd>
                    </div>
                    <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">

                         قيمنا  :
                    </dt> 
                    <dd className="inline">
                            الابتكار , السرعة , الجودة , الشفافية  
                    </dd>
                    </div>
                </dl>
                </div>
                <div className="mt-10 flex items-center gap-x-6">
                <Button href="/contact"> تواصل معنا</Button>

                </div>
            </div>
            <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjb21wdXRlcnxlbnwwfDB8fHwxNjkxODE2NjY3fDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Product screenshot"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width="2432"
                height="1442"
            />
            </div>
        </div>
        </section>
    );
    };

    export default Content;
