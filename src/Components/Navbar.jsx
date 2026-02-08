import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-red-100 text-black">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <h2 className="text-xl font-bold text-red-600">MyLogo</h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "text-red-600 font-bold" : "hover:text-red-400"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="bg-red-900 hover:bg-red-600 text-white font-bold px-4 py-2 rounded">
            Buy Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-red-600"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-red-50 px-4 pb-4 pt-6 text-center">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "text-red-600 font-bold" : "hover:text-red-400"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            <button className="bg-red-900 hover:bg-red-600 text-white font-bold px-4 py-2 rounded mt-2">
              Buy Now
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}
