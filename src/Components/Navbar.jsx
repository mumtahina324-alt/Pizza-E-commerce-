import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav className="bg-red-100 text-black">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Left: Logo */}
        <div className="text-xl font-bold">
          <h2 className="text-red-600">MyLogo</h2>
        </div>

        {/* Center: Nav links */}
        <ul className="flex gap-6">
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

        {/* Right: Button */}
        <div>
          <button className="bg-red-900 hover:bg-red-600 text-white font-bold px-4 py-2 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </nav>
  );
}
