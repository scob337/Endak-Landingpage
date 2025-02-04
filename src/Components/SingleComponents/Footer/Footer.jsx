    import Tiktok from "../../../assets/images/tiktok.png";
    import Instagram from "../../../assets/images/instagram.png";
    import X from "../../../assets/images/X.png";
    export default function Footer() {
    return (
        <>
        <footer className="text-gray-700 body-font">
            <div className="border-t border-gray-200">
            <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
                <div className="flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center gap-5 ">
                <a
                    href="https://www.tiktok.com/@3ndakapp"
                    target="_blank"
                    className="text-gray-500 hover:text-[#00be3c] cursor-pointer transition  w-6"
                >
                    <img loading="lazy"  src={Tiktok} alt="Tiktok" className="object-cover" />
                </a>

                <a
                    href="https://x.com/3ndakapp"
                    target="_blank"
                    className="ml-3 text-gray-500 hover:text-[#00be3c] cursor-pointer transition w-6"
                >
                    <img loading="lazy"   src={X} alt="X" className="object-cover" />
                </a>

                <a
                    href="https://www.instagram.com/3ndakapp/"
                    target="_blank"
                    className="ml-3 text-gray-500 hover:text-[#00be3c] cursor-pointer transition w-6"
                >
                    <img loading="lazy"  src={Instagram} alt="Instagram" className="object-cover" />
                </a>

                </div>
            </div>
            </div>
            <div className="bg-gray-200">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                <p className="text-gray-500 text-sm text-center sm:text-left">
                © شركة عندك لخدمات الأعمال
                </p>
                <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full flex flex-row-reverse sm:text-left text-center text-gray-500 text-sm">
                جميع الحقوق محفوظة 2025
                </span>
            </div>
            </div>
        </footer>
        <a
            href="https://api.whatsapp.com/send?phone=0125783379"
            target="_blank"
            className="rounded-full w-14 h-14  fixed bottom-0 right-0 flex items-center justify-center  mr-8 mb-8 "
        >
            <img loading="lazy" 
            src="https://endak.live/public/icon_422e74d54eda17a608c6111a307bea6a6c79699c.svg"
            alt="icon"
            />
        </a>
        </>
    );
    }
