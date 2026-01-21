import pizzaImage from "../assets/Image/about-1.jpeg";

export default function AboutPizza() {
  const handleViewMore = () => {
    alert("View More clicked!");
    console.log("View More button was clicked");
  };
  return (
    <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row items-center gap-10">
      {/* Left Side - Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={pizzaImage}
          alt="Delicious Pizza"
          className=" object-cover h-120 w-120"
        />
      </div>

      {/* Right Side - Content */}
      <div className="md:w-100 flex flex-col gap-4 ">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="text-gray-700">
          Pizza is a world-famous dish loved for its crispy crust, rich flavors,
          and endless variety of toppings. Our pizzeria is dedicated to crafting
          the perfect pizza using fresh ingredients, traditional recipes, and a
          passion for taste that delights every bite.
        </p>
        <button
          onClick={handleViewMore}
          className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
        >
          View More
        </button>
      </div>
    </div>
  );
}
