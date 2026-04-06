import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product, onClick }) {
  const { dispatch } = useContext(CartContext);

  const handleBuyNow = (e) => {
    e.stopPropagation(); // modal open আটকাতে
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div
      onClick={onClick} // card click → modal open
      className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 cursor-pointer"
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-56 w-full object-contain"
      />

      <h3 className="mt-4 font-semibold">{product.name}</h3>

      <p className="text-red-600 text-sm font-semibold mb-4 mt-1">
        ৳{product.price.toLocaleString()}
      </p>

      <button
        onClick={handleBuyNow} // bottom click → cart add
        className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition"
      >
        Buy Now
      </button>
    </div>
  );
}
