import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
const CTAServices = ({children}) => {
  return (
<div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-20 ">

<div
    className="relative isolate overflow-hidden  px-6 py-20 text-center sm:rounded-3xl bg-[#00be3cc5]">

    <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
   {children}
    </h2>


    <div className="mt-8 flex items-center justify-center gap-x-6">
        <Link to="/contact" className="inline-flex items-center flex-row-reverse
         justify-center gap-2 rounded-xl bg-[transparent] px-4 py-3 text-sm font-semibold
          text-white ring-1 ring-inset ring-[#fff] shadow-sm transition-all duration-150 hover:bg-[#fff] hover:text-[#00be3c] focus-visible:outline-offset-2 "
            >
            تواصل معنا
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path 
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                   ></path>
            </svg>
        </Link>
    </div>

    <svg viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" >
        </circle>

    </svg>

</div>

</div>
  )
}

CTAServices.propTypes = {
  children: PropTypes.number.isRequired, 
}
export default CTAServices
