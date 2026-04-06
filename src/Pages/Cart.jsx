import { X } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

export default function Cart({ onClose }) {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-2">
      <div className="bg-white rounded-3xl p-4 sm:p-6 max-w-md sm:max-w-2xl w-full max-h-[90vh] flex flex-col">
        <button
          onClick={onClose}
          className="self-end text-gray-500 hover:text-red-600"
        >
          <X size={24} />
        </button>

        <h2 className="text-xl sm:text-2xl font-bold text-center mb-3 sm:mb-4">
          Your Cart
        </h2>

        <div className="flex-1 overflow-y-auto space-y-2 sm:space-y-3">
          {cart.length > 0 ? (
            cart.map((item) => <CartItem key={item.id} item={item} />)
          ) : (
            <p className="text-center text-gray-500 text-sm sm:text-base">
              Your cart is empty 😔
            </p>
          )}
        </div>

        <div className="mt-3 sm:mt-4 border-t border-red-600 pt-3 sm:pt-4 text-sm sm:text-base">
          <div className="flex justify-between font-bold text-base sm:text-lg">
            <span>Total</span>
            <span className="text-red-600">৳{total.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
