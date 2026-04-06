import { Trash2 } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartItem({ item }) {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="flex justify-between items-center p-2 sm:p-3 shadow-sm rounded bg-gray-50">
      <div className="flex items-center gap-2 sm:gap-3">
        <img
          src={item.image}
          className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
        />
        <div className="text-sm sm:text-base">
          <h3 className="font-bold text-red-500">{item.name}</h3>
          <p className="text-sm">
            ৳{item.price} × {item.qty}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1 sm:gap-4 text-sm sm:text-base">
        <button
          className="px-2 py-1 bg-gray-200 rounded"
          onClick={() => dispatch({ type: "DECREASE_QTY", payload: item.id })}
        >
          −
        </button>
        <span>{item.qty}</span>
        <button
          className="px-2 py-1 bg-gray-200 rounded"
          onClick={() => dispatch({ type: "INCREASE_QTY", payload: item.id })}
        >
          +
        </button>

        {/* Trash icon responsive */}
        <button
          onClick={() =>
            dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
          }
          className="ml-1 text-red-500"
        >
          <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
}
