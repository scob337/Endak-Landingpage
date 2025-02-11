import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

const Button = ({href , children}) => {
  return (
    <Link to={href}>

<button
 className={`inline-flex
   text-[#00be3c]    border-1 border-[#00be3c] 
   py-2 px-6 focus:outline-none
  hover:bg-[#00be3c] hover:text-white rounded 
  text-lg
  cursor-pointer
  `}>
      {children}
    
    </button>
    </Link>
      
  )
}
Button.propTypes = {
  href: PropTypes.string.isRequired,  
  children: PropTypes.node.isRequired,   
   
};
export default Button
