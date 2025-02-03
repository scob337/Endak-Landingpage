import propTypes from 'prop-types'
const MainTitle = ({children}) => {
  return (
    <h2 className="text-medium text-[#00be3c] font-medium title-font mb-1 p-5">
    {children}
    </h2>
  )
}
MainTitle.propTypes = {
  children: propTypes.node.isRequired,
}
export default MainTitle
