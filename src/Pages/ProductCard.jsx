export default function ProductCard({ product, onBuy }) {
  return (
    <div className="bg-white border-gray-200 shadow-md rounded-xl p-5 w-64 flex flex-col items-center text-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-50 object-cover rounded-lg"
      />

      <h3 className="mt-3 text-lg font-semibold text-center">{product.name}</h3>

      <p className="text-red-600 text-center">৳{product.price}</p>

      <button
        onClick={() => onBuy(product)}
        className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-800 transition duration-300 ease-in-out"
      >
        Buy Now
      </button>
    </div>
  );
}
