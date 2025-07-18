const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white flex flex-col justify-between">
      <div>
        <img src={product.image}alt={product.title}
          className="h-40 w-[100%] object-cover rounded-xl mb-4"/>
        <div className="space-y-1">
          <p className="text-xs text-gray-400">ID: {product.id}</p>
          <h2 className="text-xl font-bold text-gray-800">{product.title}</h2>
          <p className="text-sm text-gray-600">{product.description}</p>
          <p className="text-md font-medium text-indigo-600 mt-2">${product.price}</p>
          <p className="text-sm italic text-gray-500">Category: {product.category}</p>
        </div>
      </div>
      <button className="bg-indigo-500 text-white w-full py-2 mt-5 rounded-lg font-semibold hover:bg-indigo-600 transition duration-200">
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
