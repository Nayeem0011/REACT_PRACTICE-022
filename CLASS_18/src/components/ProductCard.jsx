import { useCartStore } from "../zustand/store/store";

const ProductCard = ({ product }) => {
  const dispatch = useCartStore(state => state.dispatch)

  return (
    <div className="border rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white flex flex-col justify-between">
      <div>
       <div className="relative h-48 rounded-xl overflow-hidden mb-4">
        <img src={product.image}alt={product.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"/>
        <span className="absolute top-2 right-2 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full shadow">{product.category}</span>
      </div>
        <div className="space-y-1">
          <p className="text-xs text-gray-400">ID: {product.id}</p>
          <h2 className="text-xl font-bold text-gray-800">{product.title}</h2>
          <p className="text-sm text-gray-600">{product.description}</p>
          <p className="text-md font-medium text-indigo-600 mt-2">${product.price}</p>
          <p className="text-sm italic text-gray-500">Category: {product.category}</p>
        </div>
      </div>
      <button onClick={() => dispatch({type: "ADD_TO_CART", payload: product})}
       className="bg-indigo-500 text-white w-full py-2 mt-5 rounded-lg font-semibold hover:bg-indigo-600 transition duration-200">
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
