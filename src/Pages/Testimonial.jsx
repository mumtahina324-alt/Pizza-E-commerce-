// Testimonial.jsx
export default function Testimonial({ img, name, star, comment }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      <img
        src={img}
        alt={name}
        className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-2 sm:border-4 border-red-300 mb-4 object-cover"
      />

      <h1 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
        {name}
      </h1>

      <div className="flex gap-1 text-yellow-400 my-2">
        {star}
        {star}
        {star}
        {star}
        {star}
      </div>

      <p className="text-sm sm:text-base md:text-sm text-gray-600 leading-relaxed">
        {comment}
      </p>
    </div>
  );
}
