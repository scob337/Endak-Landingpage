import ProductData from "./ProductData";

const ProductCard = () => {
    
    return (
      <div className="flex gap-5 flex-wrap justify-center items-center bg-gray-100 py-5
      ">

        {ProductData.map((product,idx) => (
        <div 
        key={idx}
        className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg h-[32rem] lg:w-1/4
            md:w-1/3 sm:w-1/2 w-[90%]
        ">
        <img loading="lazy" 
          src={product.IMG}
          alt={product.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-medium font-bold text-gray-800 mb-3">{product.title}</h2>
          <div className="text-gray-700 leading-tight mb-4">
                <ul className="flex flex-col gap-3" style={{ listStyleType: "number" }}>
                    {product.Description.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
          </div>

        </div>
      </div>
        ))}



      </div>
    );
  };
  
  export default ProductCard;
  