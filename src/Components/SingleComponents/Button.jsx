import { Link } from "react-router-dom"

const Button = ({href , children}) => {
  return (
<button
 className={`inline-flex
   text-white bg-indigo-500 border-0 
   py-2 px-6 focus:outline-none
  hover:bg-indigo-600 rounded 
  text-lg
  cursor-pointer
  `}>
    <Link to={href}>
      {children}
    </Link>
    
    </button>
      
  )
}

export default Button
