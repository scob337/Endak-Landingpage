  import { Link } from "react-router-dom";

  const CTA = () => {
    return (
      <section className="py-16 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:py-14 lg:px-10 p-10 rounded-2xl bg-gradient-to-r from-[#00be3c] to-[#00be3c] flex items-center gap-6 justify-between flex-col lg:flex-row-reverse">
            <Link
              to="/"
              className="flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-[#00be3c] font-semibold py-4 px-8 transition-all duration-500"
            >
              ابدأ الان
              <svg
                width="19"
                height="14"
                viewBox="0 0 19 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                  stroke="#00be3c"
                />
              </svg>
            </Link>

            <Link
              to="/services"
              className="flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-[#00be3c] font-semibold py-4 px-8 transition-all duration-500"
            >
              {" "}
              تعرف علي خدماتنا
              <svg
                width="19"
                height="14"
                viewBox="0 0 19 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                  stroke="#00be3c"
                />
              </svg>
            </Link>

            <Link
              to="/contact"
              className="flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-[#00be3c] font-semibold py-4 px-8 transition-all duration-500"
            >
              تواصل معنا
              <svg
                width="19"
                height="14"
                viewBox="0 0 19 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                  stroke="#00be3c"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    );
  };

  export default CTA;
