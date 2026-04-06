import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const exists = state.cart.find((i) => i.id === action.payload.id);

      if (exists) {
        return {
          ...state,
          cart: state.cart.map((i) =>
            i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i,
          ),
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((i) => i.id !== action.payload),
      };

    case "INCREASE_QTY":
      return {
        ...state,
        cart: state.cart.map((i) =>
          i.id === action.payload ? { ...i, qty: i.qty + 1 } : i,
        ),
      };

    case "DECREASE_QTY":
      return {
        ...state,
        cart: state.cart
          .map((i) => (i.id === action.payload ? { ...i, qty: i.qty - 1 } : i))
          .filter((i) => i.qty > 0),
      };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
