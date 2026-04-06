import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { CartProvider } from "../context/CartContext";

export default function RootLayout() {
  return (
    <CartProvider>
      <Navbar />
      <Outlet />
    </CartProvider>
  );
}
