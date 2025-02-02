    export default function Footer() {
    return (
        <>
        <footer className="text-gray-700 body-font">
            <div className="border-t border-gray-200">
            <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
                <div className="flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center gap-5 ">
                <a className="text-gray-500">
                    <svg
                    fill="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                </a>
                <a className="ml-3 text-gray-500">
                    <svg
                    fill="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                </a>
                <a className="ml-3 text-gray-500">
                    <svg
                    fill="none"
                    stroke="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                </a>
                <a className="ml-3 text-gray-500">
                    <svg
                    fill="currentColor"
                    stroke="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    >
                    <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
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
            className="rounded-full w-12 h-12 bg-gray-100 fixed bottom-0 right-0 flex items-center justify-center text-gray-800 mr-8 mb-8 shadow-sm border-gray-300 border"
            target="_blank"
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
        </a>
        </>
    );
    }
