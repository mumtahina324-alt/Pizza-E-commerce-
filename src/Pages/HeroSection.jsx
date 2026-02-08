import heroImage from "../assets/Image/5.png";

export default function HeroSection() {
  return (
    <section className="bg-white py-12">
      <div
        className="
          max-w-7xl mx-auto
          px-6 sm:px-10 lg:px-20
          flex flex-col md:flex-row
          items-center justify-between
          gap-10
        "
      >
        {/* LEFT CONTENT (Text) */}
        <div className="max-w-xl space-y-5 text-center md:text-left order-2 md:order-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Tasty <span className="text-red-600">Pizza</span>
          </h1>

          <p className="text-sm sm:text-base text-gray-600">
            Pizza is a popular Italian food enjoyed all over the world. It is
            usually made with a dough base topped with tomato sauce and cheese.
            Different toppings like vegetables, meat, or seafood add variety in
            taste.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-8 py-2 bg-red-600 text-white font-semibold rounded-lg">
              Buy Now
            </button>

            <button className="px-8 py-2 border border-gray-300 text-gray-800 font-semibold rounded-lg">
              View More
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="order-1 md:order-2">
          <img
            src={heroImage}
            alt="Hero"
            className="w-64 sm:w-80 md:w-112.5 animate-spin-slow"
          />
        </div>
      </div>
    </section>
  );
}
