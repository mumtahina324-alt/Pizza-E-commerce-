export default function ProductCard({ product, onBuy }) {
  return (
    <div
      className="
        bg-white
        border border-gray-200
        rounded-xl
        shadow-sm
        p-4
        w-full
        max-w-sm
        flex flex-col
        sm:items-center
        text-center sm:text-center
      "
    >
      {/* IMAGE */}
      <img
        src={product.image}
        alt={product.name}
        className="
          w-full
          h-60
          sm:h-56
          object-contain
          rounded-lg
        "
      />

      {/* TEXT */}
      <h3 className="mt-3 text-base sm:text-lg font-semibold">
        {product.name}
      </h3>

      <p className="text-red-600 font-semibold mt-1">৳{product.price}</p>

      {/* BUTTON */}
      <button
        onClick={() => onBuy(product)}
        className="
          mt-3
          w-full
          sm:w-full
          bg-red-600
          text-white
          py-2
          rounded-lg
          hover:bg-red-700
          transition
        "
      >
        Buy Now
      </button>
    </div>
  );
}
