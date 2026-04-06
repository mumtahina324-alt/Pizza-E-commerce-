import { Menu, ShoppingBasket, X } from "lucide-react";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Cart from "../Pages/Cart";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="bg-red-100">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4 relative">
          <h2 className="text-xl font-bold text-red-600">MyShop</h2>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600 font-bold"
                    : "text-gray-700 font-semibold hover:text-red-600 transition"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </ul>

          {/* Mobile Cart & Menu */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Cart */}
            <div
              onClick={() => setOpenCart(true)}
              className="relative cursor-pointer"
            >
              <ShoppingBasket size={28} className="text-red-600" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs h-5 w-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
            >
              {menuOpen ? (
                <X size={28} className="text-red-600" /> // X icon red
              ) : (
                <Menu size={28} className="text-red-600" /> // Menu icon red
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col gap-3 p-4 bg-red-100">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-red-600 font-semibold"
                    : "text-gray-700 hover:text-red-600 transition"
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </ul>
        )}
      </nav>

      {openCart && <Cart onClose={() => setOpenCart(false)} />}
    </>
  );
}
