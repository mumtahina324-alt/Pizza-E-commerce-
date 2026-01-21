export default function Footer() {
  return (
    <footer className="bg-red-50 text-black pt-12 mt-12 border-t border-red-700">
      {/* Footer content */}
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left section */}
        <div>
          <h3 className="text-[14px] font-semibold mb-2 py-8">
            Get the best Pizza made to taste better and linger the memories in
            your mouth.Create a menu and serve yourself the best pizza in your
            area.
          </h3>
        </div>

        {/* Help section */}
        <div className="px-20">
          <h3 className="text-md font-semibold mb-2 text-red-600 py-2">Help</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="text-sm hover:underline">
                Search
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Help
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Information
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Shipping Details
              </a>
            </li>
          </ul>
        </div>

        {/* Support section */}
        <div className="px-20">
          <h3 className="text-md font-semibold mb-2 text-red-600 py-2">
            Support
          </h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="text-sm hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Refunds & Returns
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Deliveries
              </a>
            </li>
          </ul>
        </div>

        {/* Information section */}
        <div className="px-20">
          <h3 className="text-md font-semibold mb-2 py-2 text-red-600">
            Information
          </h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="text-sm hover:underline">
                Search Terms
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Advanced Search
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Help & FAQ's
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Store Location
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Orders & Returns
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom text */}
      <div className="border-t border-red-600 mt-8 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Your Pizza Company. All rights reserved.
      </div>
    </footer>
  );
}
