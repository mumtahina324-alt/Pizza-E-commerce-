import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductDetailModal({ product, onClose }) {
  const { dispatch } = useContext(CartContext);

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    onClose(); // modal auto close
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
      <div
        className="bg-white rounded-2xl p-4 sm:p-6 max-w-xs sm:max-w-md w-full text-center"
        onClick={(e) => e.stopPropagation()} // backdrop click avoid
      >
        {/* Product Image */}
        <img
          src={product.image}
          className="h-40 sm:h-56 mx-auto object-contain"
        />

        {/* Product Name */}
        <h2 className="text-lg sm:text-xl font-bold mt-3 sm:mt-4">
          {product.name}
        </h2>

        {/* Price */}
        <p className="text-red-600 text-sm sm:text-base font-semibold mt-1 sm:mt-2">
          ৳{product.price.toLocaleString()}
        </p>

        {/* Description / History */}
        <p className="mt-2 sm:mt-3 text-gray-600 text-xs sm:text-sm">
          {product.history}
        </p>

        {/* Buttons */}
        <div className="mt-4 sm:mt-5 flex gap-2 sm:gap-3">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold"
          >
            Buy Now
          </button>

          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 hover:bg-gray-300 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
