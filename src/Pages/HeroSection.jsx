import heroImage from "../assets/Image/5.png";

export default function HeroSection() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-20 flex items-center justify-between">
        {/* LEFT CONTENT */}
        <div className="max-w-xl space-y-6">
          <h1 className="text-5xl font-bold text-gray-900">
            Tasty <span className="text-red-600">Pizza</span>
          </h1>

          <p className="text-sm text-gray-600">
            Pizza is a popular Italian food enjoyed all over the world. It is
            usually made with a dough base topped with tomato sauce and cheese.
            Different toppings like vegetables, meat, or seafood add variety in
            taste.
          </p>

          <div className="flex gap-4">
            <button className="px-10 py-2 bg-red-600 text-white font-semibold rounded-lg">
              Buy Now
            </button>

            <button className="px-10 py-2 border text-gray-800 font-semibold rounded-lg">
              View More
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img src={heroImage} alt="Hero" className="w-[450px]" />
        </div>
      </div>
    </section>
  );
}
